import React from 'react';

import '../../style-sheets/product-details/product-details.css';
import '../../style-sheets/commons/commons.css'
import { AMAZON_BUY_BUTTON } from '../../constants/other-constants';


/*
To add:
Score
Recommendation
Back & Category Navigation
*/
class ProductDetails extends React.Component {

  constructor(props) {
    super(props);

    this.getBasicInfos = this.getBasicInfos.bind(this);
    this.getBasicDetails = this.getBasicDetails.bind(this);
    this.getSpecification = this.getSpecification.bind(this);
    this.getDirections = this.getDirections.bind(this);
    this.getAmazonBuyLink = this.getAmazonBuyLink.bind(this);
  }
  render() {
    if(this.props.PRODUCT_DETAILS.imageInfo) {
      return (

        // shadow-1
      <div style={{"padding" : 18}} className = "br3 ">
                  {/* shadow-1 */}
          <div align="center" className = "br3">
            <img src={this.props.PRODUCT_DETAILS.imageInfo.thumbnailUrl+"?odnHeight=320&odnWidth=320&odnBg=FFFFFF"} alt="NA"></img>
          </div>

          <br/>

          <div align='center'>
    <a href={this.getAmazonBuyLink()} target="_blank" rel="noreferrer">
      <img className='BuyButton' src={AMAZON_BUY_BUTTON.IMAGE_PATH} alt={AMAZON_BUY_BUTTON.ALT}/>
    </a>
  </div>


        <this.getBasicInfos/>
        <this.getBasicDetails/>
        <this.getDirections/>
        <this.getSpecification/>



      <b>Ingredients</b>


        </div>

      );
    }
    else return(<></>);
  }

  getAmazonBuyLink () {
    return AMAZON_BUY_BUTTON.LINK + "&keywords=" + this.props.AD_SEARCH;
  }

  getSpecification() {

    if(this.props.PRODUCT_DETAILS.specifications) {

      var rows = [];

      rows.push(  <>  < b>Specifications</b><br/> </>);

      
      for(let i=0; i<this.props.PRODUCT_DETAILS.specifications.length; i++) {
        rows.push(
        <ul> <b>{this.props.PRODUCT_DETAILS.specifications[i].name} </b>
        <br/>
        {this.props.PRODUCT_DETAILS.specifications[i].value}</ul>,
      )
    }
   
    return ( <>{rows}</> );
  
  }
  
  else
    return (<></>);

  }

  getDirections() {

    if(this.props.PRODUCT_DETAILS.directions) {

      var rows = [];

      rows.push(  <>  < b>Directions</b><br/> </>);
      
      for(let i=0; i<this.props.PRODUCT_DETAILS.directions.length; i++) {
        rows.push(
        <ul> <b>{this.props.PRODUCT_DETAILS.directions[i].name} </b>
        <br/>
        {this.props.PRODUCT_DETAILS.directions[i].value}</ul>,
      )
    }
   
    return ( <>{rows}</> );
  
  }
  
  else
    return (<></>);
    
  }

  getBasicInfos() {

    if(this.props.PRODUCT_DETAILS.name) {

      var rows = [];

      rows.push(  <>
        <b>Product Infos</b><br/></>);

      rows.push(  <>
        <ul> Name : {this.props.PRODUCT_DETAILS.name} </ul>
        {/* <ul> Manufacturer : {this.props.PRODUCT_DETAILS.manufacturerName} </ul>
        <ul> Brand : {this.props.PRODUCT_DETAILS.brand}</ul> */}
      </>
      );
   
    return ( <>{rows}</> );
  
  }
  
  else
    return (<></>);
    
  }

  getBasicDetails() {

    if(this.props.PRODUCT_DETAILS.shortDescription) {

      var rows = [];

      rows.push(  <>
        <b>Product Details</b><br/></>);

      rows.push(  <>
        <div
      dangerouslySetInnerHTML={{ __html: this.props.PRODUCT_DETAILS.shortDescription }}/>
      <div
      dangerouslySetInnerHTML={{ __html: this.props.PRODUCT_DETAILS.longDescription }}/>
      </>
      );
   
    return ( <>{rows}</> );
  
  }
  
  else
    return (<></>);
    
  }
}




export { ProductDetails }