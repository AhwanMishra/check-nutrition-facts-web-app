import React from 'react';

import '../../style-sheets/home-page/home-page.css';
import { SearchBoxAndTitle } from '../home-page/search-box-and-title';
import { MAIN_CATEGORIES } from '../../constants/main-category';
import { MainCategory } from '../commons/main-category';
import { HomePageBanner } from '../home-page/home-page-banner';
import { QUOTE_OF_THE_DAY, QUOTES } from '../../constants/health-quotes'
import { getDesktopAd, getMobileAd, isMobileDevice} from '../commons/ads/ad-utils'
import { Footer } from '../commons/footer';



class HomePageMainContainer extends React.Component {

  constructor() {
    super();
    this.randomInteger = this.randomInteger.bind(this);
    this.getDesktopAd = getDesktopAd.bind(this);
    this.getMobileAd = getMobileAd.bind(this);
  }


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

              <this.addSpaces/>

              <div className = "Quote">
                
                <div style={{fontWeight: "bold"}}>{QUOTE_OF_THE_DAY}</div>
                <div style={{fontStyle: "italic"}}> {QUOTES[this.randomInteger(0,99)]} </div>

              </div>

              <this.getMobileAd/>
              <Footer/>


            </div>
            </div>

              <this.getDesktopAd/>

          </div>
      </>

    );
  }


  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  addSpaces (){
    if(!isMobileDevice()) {
        return <><br /><br /><br /><br /><br /></>;
    }
    else return null;
  }

}


export { HomePageMainContainer }