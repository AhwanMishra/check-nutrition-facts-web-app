import React from 'react';

import '../../style-sheets/home-page/home-page.css';
import { SearchBoxAndTitle } from '../home-page/search-box-and-title';
import { MAIN_CATEGORIES } from '../../constants/main-category';
import { MainCategory } from '../commons/main-category';
import { HomePageBanner } from '../home-page/home-page-banner';
import { RightSideAd } from '../commons/ads/right-side-ad';
import { QUOTE_OF_THE_DAY, QUOTES } from '../../constants/health-quotes'

class HomePageMainContainer extends React.Component {


  render() {
    return (
      <>
        <HomePageBanner/>
        <div className="HomePageMainContainer">
          <div align = "center">
            
            <div className="MainContent">

              <SearchBoxAndTitle/>
                
              <div className='CenterMainCategoryPanel'>
                <MainCategory LABEL = {MAIN_CATEGORIES.CATEGORIES.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.CATEGORIES.IMAGE_PATH} LINK = {MAIN_CATEGORIES.CATEGORIES.LINK}/>
                <MainCategory LABEL = {MAIN_CATEGORIES.DISCOUNT_COUPONS.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.DISCOUNT_COUPONS.IMAGE_PATH} LINK = {MAIN_CATEGORIES.DISCOUNT_COUPONS.LINK}/>
                <MainCategory LABEL = {MAIN_CATEGORIES.HEALTHY_FOODS.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.HEALTHY_FOODS.IMAGE_PATH} LINK = {MAIN_CATEGORIES.HEALTHY_FOODS.LINK}/>
                <MainCategory LABEL = {MAIN_CATEGORIES.BLOGS.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.BLOGS.IMAGE_PATH} LINK = {MAIN_CATEGORIES.BLOGS.LINK}/>  
                <MainCategory LABEL = {MAIN_CATEGORIES.ABOUT.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.ABOUT.IMAGE_PATH} LINK = {MAIN_CATEGORIES.ABOUT.LINK}/>      
              </div>

              <br/><br/><br/><br/><br/>
              <div className = "Quote">
                
                <div style={{fontWeight: "bold"}}>{QUOTE_OF_THE_DAY}</div>
                <div style={{fontStyle: "italic"}}> {QUOTES[this.randomInteger(0,99)]} </div>

              </div>

            </div>
          
          </div>




          <div className="RightSideAd">
            <RightSideAd/>
          </div>
        </div>
      </>

    );
  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}

export { HomePageMainContainer }