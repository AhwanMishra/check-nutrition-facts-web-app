import React from 'react';
import { ProductComponent } from './product-component'
import { getParamFromCurrentURL } from '../../utils/common-utils.js';
import { BackLink } from '../../utils/common-utils.js';
import { DEFAULT_SEARCH } from '../commons/ads/right-side-ad';
// import { SearchFilter } from '../commons/search-filter';
import { getDesktopAd, getMobileAd } from '../commons/ads/ad-utils'
import { getSearchByCategory } from '../../apis/cnfApis'
import { Loader, Alert } from '@aws-amplify/ui-react';
import { Footer } from '../commons/footer';


import '../../style-sheets/search-page/search-page.css';

import { Pagination } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

class SearchResults extends React.Component {

  constructor(props) {
    super(props);

    this.category = this.getCategoryFromCurrentURL();
    this.subCategory = this.getSubCategoryFromCurrentURL();

    this.state = { pageNumber : 0, productList : [], apiFetchError : false, totalPages : 0};
    
    
    this.getParamFromCurrentURL = getParamFromCurrentURL.bind(this);
    this.getQueryOrCategoryFromURL = this.getQueryOrCategoryFromURL.bind(this);
    this.getSearchQueryFromCurrentURL = this.getSearchQueryFromCurrentURL.bind(this);
    this.getCategoryFromCurrentURL = this.getCategoryFromCurrentURL.bind(this);
    this.getSubCategoryFromCurrentURL = this.getSubCategoryFromCurrentURL.bind(this);

    this.buildAndGetRightSideAd = this.buildAndGetRightSideAd.bind(this);
    this.buildAndGetMobileAd = this.buildAndGetMobileAd.bind(this);

    this.getDesktopAd = getDesktopAd.bind(this);
    this.getMobileAd = getMobileAd.bind(this);

    this.productResults = this.productResults.bind(this);
    this.getPagination = this.getPagination.bind(this);

    this.onPageChange = this.onPageChange.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
  }

  async componentDidMount() {
    this.fetchProducts();
   }

  async fetchProducts() {
    try {
      await getSearchByCategory(this.category, this.subCategory, this.state.pageNumber).then(response => {
      // alert(response);
      this.setState({productList : response.productList})
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
      <div className='ProductResultContainer'>

          <label className='SearchResultsText'>Search Results for <i>"{this.getQueryOrCategoryFromURL().replace(/-/g, ' ')}"</i>.</label>
          
          <br/> <br/>
          <div className='BackToSearch'> <BackLink/> </div>

          {/* <div align='center'> <SearchFilter/> </div> .....Coming Soon */}

          <this.buildAndGetMobileAd/>
          
        <div className='ProductResults'>
          <this.productResults productResultList = {this.state.testData}/>
        </div>
      </div>

      <this.buildAndGetRightSideAd/>
      <this.getPagination/>
      <Footer/>
      
    </>);
  }

  buildAndGetRightSideAd () {

    let q = this.getSearchQueryFromCurrentURL();

    if ( q !== null) {
      return (<this.getDesktopAd QUERY = {q}/>);
    }

    let subCategory = this.getSubCategoryFromCurrentURL();

    if ( subCategory !== null) {
      return (<this.getDesktopAd QUERY = {subCategory.replace(/-/g, ' ')}/>);
    }

    let category = this.getCategoryFromCurrentURL();

    if ( category !== null) {
      return (<this.getDesktopAd QUERY = {category.replace( /-/g, ' ')}/>);
    }

    else {
      return (<this.getDesktopAd QUERY = {DEFAULT_SEARCH}/>);
    }
  }

  buildAndGetMobileAd () {

    let q = this.getSearchQueryFromCurrentURL();

    if ( q !== null) {
      return (<this.getMobileAd QUERY = {q}/>);
    }

    let category = this.getCategoryFromCurrentURL();

    if ( category !== null) {
      return (<this.getMobileAd QUERY = {category.replace( /-/g, ' ')}/>);
    }

    let subCategory = this.getSubCategoryFromCurrentURL();

    if ( subCategory !== null) {
      return (<this.getMobileAd QUERY = {subCategory.replace(/-/g, ' ')}/>);
    }

    else {
      return (<this.getMobileAd QUERY = {DEFAULT_SEARCH}/>);
    }
  }

  getQueryOrCategoryFromURL() {
    
    let q = this.getSearchQueryFromCurrentURL ();
    
    if( q != null ) return q;
    else return this.getSubCategoryFromCurrentURL();

  }

  getSearchQueryFromCurrentURL () {
    return getParamFromCurrentURL('q');
  }

  getSubCategoryFromCurrentURL () {
    return getParamFromCurrentURL('sub-category');
  }

  getCategoryFromCurrentURL () {
    return getParamFromCurrentURL('category');
  }

  async getCategorySearchResultFromApi () {
    return await getSearchByCategory("alcohol", "red-wine", "0");
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
        pageNumber : pNum, productList : [], apiFetchError : false
      },
      // The below function is executed after the setState. A feature of setState.
      function() {
        this.fetchProducts();
      }
      );
  }

  productResults(productList) {

    if(this.state.apiFetchError) {
      return (<>  <Alert variation="error"> Error loading product details ! Please come back in a while. </Alert></>);
    }

    if(this.state.productList.length === 0) {
      return (<> <br/><br/><br/><Loader width="6rem" height="6rem" filledColor="var(--amplify-colors-blue-40)" />  <br/><br/><br/> </>);
    }

    var rows = [];
    for(let i=0; i<this.state.productList.length; i++) {
      rows.push(
        <ProductComponent IMAGE_LINK = {this.state.productList[i].thumbnailUrl+"?odnHeight=180&odnWidth=180&odnBg=FFFFFF"}
          LABEL={this.state.productList[i].name}
          LINK={'/product-details?productId='+this.state.productList[i].usItemId}
        />
      )
    }

    if(true) {
      return ( <>{rows}</> );
    }
    else return (
      <div className="ProductNotAvailable">
        Sorry ! The item you are looking for is not available in our database.
      </div>
      );
  }
  
}




export { SearchResults }