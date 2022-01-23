import React from 'react';
import { ProductComponent } from './product-component'
import { getParamFromCurrentURL } from '../../utils/common-utils.js';
import { BackLink } from '../../utils/common-utils.js';
import { DEFAULT_SEARCH } from '../commons/ads/right-side-ad';
import { SearchFilter } from '../commons/search-filter';
import { getDesktopAd, getMobileAd } from '../commons/ads/ad-utils'



import '../../style-sheets/search-page/search-page.css';



class SearchResults extends React.Component {

  constructor() {
    super();
    this.getParamFromCurrentURL = getParamFromCurrentURL.bind(this);
    this.getQueryOrCategoryFromURL = this.getQueryOrCategoryFromURL.bind(this);
    this.getSearchQueryFromCurrentURL = this.getSearchQueryFromCurrentURL.bind(this);
    this.getCategoryFromCurrentURL = this.getCategoryFromCurrentURL.bind(this);
    this.getSubCategoryFromCurrentURL = this.getSubCategoryFromCurrentURL.bind(this);

    this.buildAndGetRightSideAd = this.buildAndGetRightSideAd.bind(this);
    this.buildAndGetMobileAd = this.buildAndGetMobileAd.bind(this);

    this.getDesktopAd = getDesktopAd.bind(this);
    this.getMobileAd = getMobileAd.bind(this);
  }

  render() {
    return (
    <>
      <div className='ProductResultContainer'>

          <label className='SearchResultsText'>Search Results for <i>"{this.getQueryOrCategoryFromURL().replace(/-/g, ' ')}"</i>.</label>
          

          <div className='BackToSearch'> <BackLink/> </div>

          <div align='center'> <SearchFilter/> </div>

          <this.buildAndGetMobileAd/>

          
        <div className='ProductResults'>
          <this.productResults/>
        </div>
      </div>
      

      <this.buildAndGetRightSideAd/>
      
    </>
    );
  }

  buildAndGetRightSideAd () {

    let q = this.getSearchQueryFromCurrentURL();

    if ( q !== null) {
      return (<this.getDesktopAd QUERY = {q}/>);
    }

    let category = this.getCategoryFromCurrentURL();

    if ( category !== null) {
      return (<this.getDesktopAd QUERY = {category.replace( /-/g, ' ')}/>);
    }

    let subCategory = this.getSubCategoryFromCurrentURL();

    if ( subCategory !== null) {
      return (<this.getDesktopAd QUERY = {subCategory.replace(/-/g, ' ')}/>);
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

  productResults() {
    var rows = [];
    for(let i=0; i<7; i++) {
      rows.push(
        <ProductComponent IMAGE_LINK = 'https://i5.walmartimages.com/asr/dac4f4eb-02d5-4432-9069-33c8e4608bcb_1.c6c32e75f7fc4bf6c22720ec63249994.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF'
          LABEL='Freshness Guaranteed White Sub Rolls, 16 oz, 6 Count at Walmart'
          LINK='/product-details'
        />
      )
    }
    rows.push(
      <ProductComponent IMAGE_LINK = 'https://i5.walmartimages.com/asr/dac4f4eb-02d5-4432-9069-33c8e4608bcb_1.c6c32e75f7fc4bf6c22720ec63249994.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF'
        LABEL='Freshness Guaranteed White Sub Rolls, 16 oz, 6 Count at Walmart more text more text motre df dfd df fd dfg'
        LINK='/product-details'
      />
    )

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