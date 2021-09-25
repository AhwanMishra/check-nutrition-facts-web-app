import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
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
import { ProductDetails } from '../product-page/product-details';

import { APP_PATHS } from '../../constants/app-paths';


class HomePageCenterOfHW extends React.Component {


  render() {
    return (
    <div className="HomePageCenterOfHW">
    


      <Router>
            <Switch>
            <Route exact path={APP_PATHS.HOME} component={HomePageMainContainer}></Route>
            <Route exact path={APP_PATHS.CATEGORIES} component={Categories}></Route>
            <Route exact path={APP_PATHS.DISCOUNT_COUPONS} component={DiscountCoupons}></Route>
            <Route exact path={APP_PATHS.HEALTHY_FOODS} component={HealthyFoods}></Route>
            <Route exact path={APP_PATHS.BLOGS} component={Blogs}></Route>
            <Route exact path={APP_PATHS.ABOUT} component={About}></Route>
            <Route exact path={APP_PATHS.SEARCH_RESULTS} component={SearchResults}></Route>
            <Route exact path={APP_PATHS.PRODUCT_DETAILS} component={ProductDetails}></Route>
            </Switch>
       </Router>




    </div>
    );
  }


}

export { HomePageCenterOfHW }