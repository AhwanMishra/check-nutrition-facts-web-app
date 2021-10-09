import React from 'react';
import { CommonCategoryRenderer } from './common-category-renderer';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom';

class Categories extends React.Component {


  render() {


    // <Router>
    //   <Switch>
    //     <Route exact path={MAIN_CATEGORY_PATHS.HOME} component={HomePageMainContainer}></Route>
    //     <Route exact path={MAIN_CATEGORY_PATHS.CATEGORIES} component={Categories}></Route>
    //     <Route exact path={MAIN_CATEGORY_PATHS.DISCOUNT_COUPONS} component={DiscountCoupons}></Route>
    //     <Route exact path={MAIN_CATEGORY_PATHS.HEALTHY_FOODS} component={HealthyFoods}></Route>
    //     <Route exact path={MAIN_CATEGORY_PATHS.BLOGS} component={Blogs}></Route>
    //     <Route exact path={MAIN_CATEGORY_PATHS.ABOUT} component={About}></Route>
    //     <Route exact path={MAIN_CATEGORY_PATHS.SEARCH_RESULTS} component={SearchResults}></Route>
    //     <Route exact path={MAIN_CATEGORY_PATHS.PRODUCT_DETAILS} component={ProductDetails}></Route>
    //   </Switch>
    // </Router>


    // for(category in XYZ) {
      return (
        <>
          Categories will be shown here !
          <CommonCategoryRenderer/>
        </>
      );
    // }
  }



}

export { Categories }