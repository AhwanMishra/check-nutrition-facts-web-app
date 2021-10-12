import React from 'react';
import '../../style-sheets/discount-coupons/discount-coupons.css';

class DiscountComponent extends React.Component {
  

  render() {
    return (
      <div className="DiscountComponent">
        <a href={ this.props.OFFER.LINK } target='_blank' rel='noopener noreferrer'>
          <div className='DiscountPercentText'> { this.props.OFFER.DISCOUNT_PERCENTAGE }% </div>
          <br/>
          { this.props.OFFER.TAG_LINE }
          <br/>
          Promo Code : { this.props.OFFER.PROMO_CODE }
          <br/>
          Ends on : { this.props.OFFER.END_DATE }
          <br/>
          <br/>
          <div align='middle'><b>{ this.props.OFFER.ADVERTISER }</b></div>

        </a>
      </div>
      
      );
  }

}

export { DiscountComponent }