import React from 'react';
import { DiscountComponent } from '../discount-coupons-page/discount-component';
import { RightSideAd } from '../commons/ads/right-side-ad';
import '../../style-sheets/discount-coupons/discount-coupons.css';
import { BackLink, TitleComponent } from '../../utils/common-utils';
import { Footer } from '../commons/footer';
import { getAds } from '../../apis/cnfApis';
import { Pagination } from '@mui/material';
import { CircularProgress, Alert , AlertTitle} from '@mui/material/';

class DiscountCoupons extends React.Component {

  constructor(props) {
    super(props);

    this.state = { pageNumber : 0, adsList : [], apiFetchError : false, totalPages : 0 }
    this.discountResults = this.discountResults.bind(this);
    this.getPagination = this.getPagination.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  async componentDidMount() {
    this.fetchAds();
  }

  async fetchAds() {
      try {
        await getAds(this.state.pageNumber).then(response => {
        this.setState({adsList : response.productList})
        this.setState({totalPages : response.totalPages})
        
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
      <label className='DiscountResultsText'>Discount Coupons for Grocery and Gourmet Food </label>
      <br/> <br/> <div className='BackToSearch'> <BackLink/> </div>
      <br/>
        
      <div className='DiscountResults'>
        <this.discountResults/>
        <div className='Pagination'><this.getPagination/></div>

      </div>


    </div>


    <RightSideAd/>
    <Footer/>
    <TitleComponent TITLE="Discount Coupons On Food Items"/>


    </>
    );
  }

  getPagination(){
    if(this.state.totalPages > 0) {
      return (
    
    <Pagination
      count={this.state.totalPages}
      page = {this.state.pageNumber + 1}
      onChange = {this.onPageChange}
      />
    )}
    
    else return null;
  }

  onPageChange(event, pNum) {
    this.resetPageStateAndFetch(pNum - 1)
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
      return (
        <div align = "center">
      <Alert  style={{width :"max-content"}}variant = "outlined" severity="error">
        <AlertTitle style ={{display : "flex",    width: "max-content" }}>Error loading discount coupons ! </AlertTitle>
        Please come back in a while.</Alert></div>);
    }

    if(this.state.adsList.length === 0) {
      return (<> <br/><br/><br/> <CircularProgress color = 'primary' size={72}/> <br/><br/><br/>  </>);
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