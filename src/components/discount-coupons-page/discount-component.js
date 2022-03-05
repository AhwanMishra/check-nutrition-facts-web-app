import React from 'react';
import '../../style-sheets/discount-coupons/discount-coupons.css';

class DiscountComponent extends React.Component {
  

  render() {
    return (
      <div className="DiscountComponent">
        <a href={ this.props.OFFER.link } target='_blank' rel='noopener noreferrer'>
          <div className='DiscountPercentText'> { this.props.OFFER.discount_percent }% </div>
          <br/>
          { this.props.OFFER.tag_line }
          <br/>
          Promo Code : { this.props.OFFER.promo_code }
          <br/>
          Ends on : { this.props.OFFER.end_date }
          <br/>
          <br/>
          <div align='middle'><b>{ this.props.OFFER.advertiser }</b></div>

        </a>
      </div>
      
      );
  }

}

export { DiscountComponent }