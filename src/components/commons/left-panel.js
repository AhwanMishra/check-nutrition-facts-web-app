import React from 'react';
import '../../style-sheets/commons/commons.css';
import  {MAIN_CATEGORIES}  from '.././../constants/main-category.js'
import { MainCategory } from './main-category';

class LeftPanel extends React.Component {

  // constructor()
  // {
  //   super();

  //   //https://stackoverflow.com/questions/41771441/react-cannot-read-property-of-undefined
  //   //It is required to bind the functions inside the class to properly reference them with "this".
  //   //Otherwise shows undefined function sometimes.

  //   this.getLeftPanel = this.getLeftPanel.bind(this);
  // }

  render() {
    return (
    <div className='LeftPanel'>
      <MainCategory LABEL = {MAIN_CATEGORIES.SEARCH.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.SEARCH.IMAGE_PATH} LINK = {MAIN_CATEGORIES.SEARCH.LINK} />
      <MainCategory LABEL = {MAIN_CATEGORIES.CATEGORIES.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.CATEGORIES.IMAGE_PATH} LINK = {MAIN_CATEGORIES.CATEGORIES.LINK}/>
      <MainCategory LABEL = {MAIN_CATEGORIES.DISCOUNT_COUPONS.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.DISCOUNT_COUPONS.IMAGE_PATH} LINK = {MAIN_CATEGORIES.DISCOUNT_COUPONS.LINK}/>
      <MainCategory LABEL = {MAIN_CATEGORIES.HEALTHY_FOODS.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.HEALTHY_FOODS.IMAGE_PATH} LINK = {MAIN_CATEGORIES.HEALTHY_FOODS.LINK}/>
      <MainCategory LABEL = {MAIN_CATEGORIES.BLOGS.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.BLOGS.IMAGE_PATH} LINK = {MAIN_CATEGORIES.BLOGS.LINK}/>  
      <MainCategory LABEL = {MAIN_CATEGORIES.ABOUT.LABEL} IMAGE_PATH = {MAIN_CATEGORIES.ABOUT.IMAGE_PATH} LINK = {MAIN_CATEGORIES.ABOUT.LINK}/>      
    </div>
    );
  }

}

export { LeftPanel }



