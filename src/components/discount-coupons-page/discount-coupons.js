import React from 'react';
import { DiscountComponent } from '../discount-coupons-page/discount-component';
import { RightSideAd } from '../commons/ads/right-side-ad';
import '../../style-sheets/discount-coupons/discount-coupons.css';
import { BackLink } from '../../utils/common-utils';
import { Footer } from '../commons/footer';
import { Pagination } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Loader, Alert } from '@aws-amplify/ui-react';
import { getAds } from '../../apis/cnfApis';



class DiscountCoupons extends React.Component {

  constructor(props) {
    super(props);

    this.state = { pageNumber : 0, adsList : [], apiFetchError : false, totalPages : 0 }
    this.discountResults = this.discountResults.bind(this);
    this.getPagination = this.getPagination.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
  }

  async componentDidMount() {
    this.fetchAds();
  }

  async fetchAds() {
      try {
        await getAds(this.state.pageNumber).then(response => {
        // alert(response);
        this.setState({adsList : response.productList})
        this.setState({totalPages : response.totalPages})
        // alert(this.state.productList)
        
      });
    } catch (error) {
      console.log(error.response);
      this.setState({apiFetchError : true})
    }
  }


  render() {
    return (

    <>
    <div className='DiscountResultContainer'>
      <br/>
      <label className='DiscountResultsText'>Discount Coupons for Grocery and Gourmet Food </label>
      <br/><div className='BackToSearch'> <BackLink/> </div>
<br/><br/>
      <br/>
        
      <div className='DiscountResults'>
        <this.discountResults/>
      </div>

      <this.getPagination/>

    </div>


    <RightSideAd/>
    <Footer/>


    </>
    );
  }

  getPagination(){
    if(this.state.totalPages > 0) {
      return (<Pagination
      currentPage={this.state.pageNumber + 1}
      totalPages={this.state.totalPages}
      onChange={this.onPageChange}
      onNext={this.onNext}
      onPrevious={this.onPrevious}
    />)
    }
    else return null;
  }

  onPageChange(event, value) {
    this.resetPageStateAndFetch(event - 1)
  }

  onPrevious() {
    this.resetPageStateAndFetch(this.state.pageNumber - 1)
  }
  onNext() {
    this.resetPageStateAndFetch(this.state.pageNumber + 1)
  }


  // We want to reset the page state and then want to call the API again.
  resetPageStateAndFetch(pNum) {
    this.setState(
      {
        pageNumber : pNum, adsList : [], apiFetchError : false
      },
      // The below function is executed after the setState. A feature of setState.
      function() {
        this.fetchAds();
      }
      );
  }




  discountResults() {

    if(this.state.apiFetchError) {
      return (<> <Alert variation="error">Error loading discount coupons ! Please come back in a while. </Alert> </>);
    }

    if(this.state.adsList.length === 0) {
      return (<> <br/><br/><br/> <Loader width="6rem" height="6rem" filledColor="var(--amplify-colors-blue-40)" />  <br/><br/><br/>  </>);
    }

    var rows = [];
    for(let i=0; i<this.state.adsList.length; i++) {
      rows.push(
        <DiscountComponent OFFER = {this.state.adsList[i]}/>,
      )
    }

    if(true) {
      return ( <>{rows}</> );
    }
    else return (
      <div className="ProductNotAvailable">
        Sorry ! no discount coupon is available right now.
      </div>
      );
  }


}

export { DiscountCoupons }