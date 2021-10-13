import React from 'react';

import { CategoryComponent } from './category-component.js';
import { RightSideAd } from '../commons/ads/right-side-ad';
import '../../style-sheets/categories-page/categories-page.css';
import { FOOD_CATEGORIES } from '../../constants/food-categories';
import { FOOD_CATEGORY_PATHS, MAIN_CATEGORY_PATHS } from '../../constants/app-paths.js';
import { getParamFromCurrentURL, addParamToURL } from '../../utils/common-utils.js';
import { DEFAULT_SEARCH } from '../commons/ads/right-side-ad';
import { buildNewUrl, BackLink } from '../../utils/common-utils.js';




class Categories extends React.Component {

    constructor()
    {
    super();

    /*
    https://stackoverflow.com/questions/41771441/react-cannot-read-property-of-undefined
    It is required to bind the functions inside the class to properly reference them with "this".
    Otherwise shows undefined function sometimes.
    */

      this.getCategoryResults = this.getCategoryResults.bind(this);
      this.getCategoryFromCurrentURL = this.getCategoryFromCurrentURL.bind(this);
      this.getRightSideAd = this.getRightSideAd.bind(this);

      this.addParamToURL = addParamToURL.bind(this);
      this.getParamFromCurrentURL = getParamFromCurrentURL.bind(this);  
    }

    render() {
      return (
        <>
          <div className='CategoryResultContainer'>

            <br/>
            <label className='CategoryResultsText'>Search food by Categories</label>
            <br/><div className='BackToSearch'> <BackLink/> </div>

            <br/>
              
            <div className='CategoryResults'>
              <this.getCategoryResults/>
            </div>
          </div>
          
    
          <this.getRightSideAd/>
          
        </>
        );
  }

  getRightSideAd () {
    
    let category = this.getCategoryFromCurrentURL();

    if(category !== null) {
      return (<RightSideAd TO_SEARCH = {category} className="RightSideAd"/>);
    }
    else {
      return (<RightSideAd TO_SEARCH = {DEFAULT_SEARCH} className="RightSideAd"/>);
    }
  }

  getCategoryResults() {

    var rows = [];
    let category =  this.getCategoryFromCurrentURL();
    if( category === null) {

      Object.entries(FOOD_CATEGORIES).map(([key, value]) => (
        rows.push(
          <CategoryComponent IMAGE_LINK = {value.IMAGE_PATH}
            LABEL= {value.LABEL}
            LINK= {this.buildCategoryLink(value.LINK)}
          />
        )

        ));
    } else {

      let CATEGORY = Object.keys(FOOD_CATEGORY_PATHS).find(key => FOOD_CATEGORY_PATHS[key] === category);
      
      Object.entries(FOOD_CATEGORIES[CATEGORY].SUB_CATEGORIES).map(([key, value]) => (
        rows.push(
          <CategoryComponent IMAGE_LINK = {value.IMAGE_PATH}
            LABEL= {value.LABEL}
            LINK= {buildNewUrl(MAIN_CATEGORY_PATHS.SEARCH_RESULTS, {"sub-category" :  value.LINK})}
          />
        )

        ));
    }

    if(true) {
      return ( <>{rows}</> );
    }
    else return (
      <div className="CategoryNotAvailable">
        Sorry ! The item you are looking for is not available in our database.
      </div>
      );
  }

  buildCategoryLink(LINK) {
    return this.addParamToURL('category', LINK);
  }


  getCategoryFromCurrentURL () {
    return getParamFromCurrentURL('category');
  }

  
}

export { Categories }