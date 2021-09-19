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
      <MainCategory LABEL = {MAIN_CATEGORIES.SEARCH.LABEL} PATH = {MAIN_CATEGORIES.SEARCH.PATH}/>
      <MainCategory LABEL = {MAIN_CATEGORIES.CATEGORIES.LABEL} PATH = {MAIN_CATEGORIES.CATEGORIES.PATH}/>
      <MainCategory LABEL = {MAIN_CATEGORIES.DISCOUNT_COUPONS.LABEL} PATH = {MAIN_CATEGORIES.DISCOUNT_COUPONS.PATH}/>
      <MainCategory LABEL = {MAIN_CATEGORIES.HEALTHY_FOODS.LABEL} PATH = {MAIN_CATEGORIES.HEALTHY_FOODS.PATH}/>
      <MainCategory LABEL = {MAIN_CATEGORIES.BLOGS.LABEL} PATH = {MAIN_CATEGORIES.BLOGS.PATH}/>  
      <MainCategory LABEL = {MAIN_CATEGORIES.ABOUT.LABEL} PATH = {MAIN_CATEGORIES.ABOUT.PATH}/>      
    </div>
    );
  }

}

export { LeftPanel }



