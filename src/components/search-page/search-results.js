import React from 'react';
import { ProductComponent } from './product-component'
import { getParamFromCurrentURL } from '../../utils/common-utils.js';
import { BackLink, TitleComponent } from '../../utils/common-utils.js';
import { DEFAULT_SEARCH } from '../commons/ads/right-side-ad';
import { getDesktopAd, getMobileAd } from '../commons/ads/ad-utils'
import { getSearchByCategory } from '../../apis/cnfApis'
import { Footer } from '../commons/footer';
import { Pagination, CircularProgress, Alert , AlertTitle} from '@mui/material';


import '../../style-sheets/search-page/search-page.css';
import '../../style-sheets/commons/commons.css'

class SearchResults extends React.Component {

  constructor(props) {
    super(props);

    this.category = this.getCategoryFromCurrentURL();
    this.subCategory = this.getSubCategoryFromCurrentURL();

    this.state = { pageNumber : parseInt(this.getPageNumberFromCurrentURL()), productList : [], apiFetchError : false, totalPages : 0};
    
    
    this.getParamFromCurrentURL = getParamFromCurrentURL.bind(this);
    this.getQueryOrCategoryFromURL = this.getQueryOrCategoryFromURL.bind(this);
    this.getSearchQueryFromCurrentURL = this.getSearchQueryFromCurrentURL.bind(this);
    this.getCategoryFromCurrentURL = this.getCategoryFromCurrentURL.bind(this);
    this.getSubCategoryFromCurrentURL = this.getSubCategoryFromCurrentURL.bind(this);
    this.getPageNumberFromCurrentURL = this.getPageNumberFromCurrentURL.bind(this);
    this.title = this.getQueryOrCategoryFromURL() + " nutrition facts"

    this.buildAndGetRightSideAd = this.buildAndGetRightSideAd.bind(this);
    this.buildAndGetMobileAd = this.buildAndGetMobileAd.bind(this);

    this.getDesktopAd = getDesktopAd.bind(this);
    this.getMobileAd = getMobileAd.bind(this);

    this.productResults = this.productResults.bind(this);
    this.getPagination = this.getPagination.bind(this);
    this.getApiFetchAlert = this.getApiFetchAlert.bind(this);

    this.onPageChange = this.onPageChange.bind(this);
    this.getPageNumberFromCurrentURL();
  }

  async componentDidMount() {
    this.fetchProducts();
   }

  async fetchProducts() {
    try {
      await getSearchByCategory(this.category, this.subCategory, this.state.pageNumber).then(response => {
      this.setState({productList : response.productList})
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
    <TitleComponent TITLE={this.title}/>
      <div className='ProductResultContainer'>


          <label className='SearchResultsText'>Search Results for <i>"{this.getQueryOrCategoryFromURL().replace(/-/g, ' ')}"</i>.</label>
          
          <br/> <br/>
          <div className='BackToSearch'> <BackLink/> </div>

          {/* <div align='center'> <SearchFilter/> </div> .....Coming Soon */}

          <this.buildAndGetMobileAd/>
          
        <div className='ProductResults'>
          <this.productResults productResultList = {this.state.testData}/>
        </div>

        <div className='Pagination'><this.getPagination/></div>

      </div>
      <this.buildAndGetRightSideAd/>
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

  getPageNumberFromCurrentURL() {
    let pNum = getParamFromCurrentURL('pageNumber');
    if(pNum) return(pNum);
    else return(0);
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

  getApiFetchAlert() {
    return(
      <div align = "center">
      <Alert  style={{width :"max-content"}}variant = "outlined" severity="error">
        <AlertTitle style ={{display : "flex",    width: "max-content" }}>Error loading product details ! </AlertTitle>
        Please come back in a while.</Alert></div>);
  }

  async getCategorySearchResultFromApi () {
    return await getSearchByCategory("alcohol", "red-wine", "0");
  }

  getPagination(){
    if(this.state.totalPages > 0) {
      return (
      <Pagination
      count={this.state.totalPages}
      // boundaryCount = {3}
      page = {this.state.pageNumber + 1}
      onChange = {this.onPageChange}
      />)
    }
    else return null;
  }

  onPageChange(event, pNum) {
    this.resetPageStateAndFetch(pNum - 1)
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
      return (
      <>  
      <br/>
        <this.getApiFetchAlert/>

       </>
       );
    }

    if(this.state.productList.length === 0) {
      return (<> <br/><br/><br/> <CircularProgress color = 'primary' size={72}/> <br/><br/><br/> </>);
    }

    var rows = [];
    for(let i=0; i<this.state.productList.length; i++) {
      rows.push(
        <ProductComponent IMAGE_LINK = {this.state.productList[i].thumbnailUrl+"?odnHeight=180&odnWidth=180&odnBg=FFFFFF"}
          LABEL={this.state.productList[i].name}
          LINK={'/product-details?productId='+this.state.productList[i].usItemId+"&productName="+this.state.productList[i].name}
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