import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import '../../style-sheets/home-page/home-page.css';
import { HomePageMainContainer } from '../home-page/home-page-main-container'
import { Categories } from '../categories-page/categories'
import { DiscountCoupons } from '../discount-coupons-page/discount-coupons';
import { HealthyFoods } from '../healthy-foods-page/healthy-foods';
import { Blogs } from '../blogs-page/blogs';
import { About } from '../about-page/about';

import { SearchResults } from '../search-page/search-results';
import { ProductPage } from '../product-page/product-page';

import { MAIN_CATEGORY_PATHS } from '../../constants/app-paths';


class HomePageCenterOfHW extends React.Component {


  render() {
    return (
    <div className="HomePageCenterOfHW">
    


      <Router>
            <Switch>
              <Route exact path={MAIN_CATEGORY_PATHS.HOME} component={HomePageMainContainer}></Route>
              <Route exact path={MAIN_CATEGORY_PATHS.CATEGORIES} component={Categories}></Route>
              <Route exact path={MAIN_CATEGORY_PATHS.DISCOUNT_COUPONS} component={DiscountCoupons}></Route>
              <Route exact path={MAIN_CATEGORY_PATHS.HEALTHY_FOODS} component={HealthyFoods}></Route>
              <Route exact path={MAIN_CATEGORY_PATHS.BLOGS} component={Blogs}></Route>
              <Route exact path={MAIN_CATEGORY_PATHS.ABOUT} component={About}></Route>
              <Route exact path={MAIN_CATEGORY_PATHS.SEARCH_RESULTS} component={SearchResults}></Route>
              <Route exact path={MAIN_CATEGORY_PATHS.PRODUCT_DETAILS} component={ProductPage}></Route>
            </Switch>
       </Router>




    </div>
    );
  }


}

export { HomePageCenterOfHW }