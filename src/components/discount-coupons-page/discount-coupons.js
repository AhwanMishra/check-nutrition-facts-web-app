import React from 'react';
import { DiscountComponent } from '../discount-coupons-page/discount-component';
import { RightSideAd } from '../commons/ads/right-side-ad';
import '../../style-sheets/discount-coupons/discount-coupons.css';
import { OFFERS } from '../../constants/discount-coupons-constants';
import { BackLink } from '../../utils/common-utils';
import { Footer } from '../commons/footer';
import { Pagination } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


class DiscountCoupons extends React.Component {


  render() {
    return (

    <>
    <div className='DiscountResultContainer'>
      <br/>
      <label className='DiscountResultsText'>Discount Coupons for Grocery and Gourmet Food </label>
      <br/><div className='BackToSearch'> <BackLink/> </div>
<br/><br/>
      <br/>
        
      <div className='DiscountResults'>
        <this.discountResults/>
      </div>

      {/* https://ui.docs.amplify.aws/components/pagination */}

      <Pagination
          currentPage={1}
          totalPages={10}
          onChange={this.onChange}
          onNext={this.onNext}
          onPrevious={this.onPrevious}
        />

    </div>


    <RightSideAd/>
    <Footer/>


    </>
    );
  }

  discountResults() {
    var rows = [];
      rows.push(
        <DiscountComponent OFFER = {OFFERS.OFFER_1}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_2}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_3}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_4}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_5}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_6}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_7}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_8}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_9}/>,
        <DiscountComponent OFFER = {OFFERS.OFFER_10}/>
        );
     

    if(true) {
      return ( <>{rows}</> );
    }
    else return (
      <div className="ProductNotAvailable">
        Sorry ! no discount coupon is available right now.
      </div>
      );
  }


}

export { DiscountCoupons }