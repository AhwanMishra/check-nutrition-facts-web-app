import React from 'react';

import { DEFAULT_SEARCH, RightSideAd } from '../commons/ads/right-side-ad';
import { CnfPieChart } from './pie-chart';
import { ProductDetails } from './product-details';
import '../../style-sheets/product-details/product-details.css';
import { NutritionDetails } from './nutrition-details';
import { getProductDetails } from '../../apis/cnfApis';
import { getParamFromCurrentURL, BackLink } from '../../utils/common-utils.js';
import { Loader, Alert } from '@aws-amplify/ui-react';


/*
To add:
Score
Recommendation
Back & Category Navigation
*/

const TOTAL_FAT = "Total Fat";
const TOTAL_CARB = "Total Carbohydrate";
const PROTEIN = "Protein";

const macrosName = {
  [TOTAL_FAT] : "fat",
  [TOTAL_CARB] : "carb",
  [PROTEIN] : "protein"
}

class ProductPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { productDetails : [], apiFetchError : false, macros : {} }
    this.getProductPage = this.getProductPage.bind(this);
    this.getProductIdCurrentURL = this.getProductIdCurrentURL.bind(this);
    this.productID = this.getProductIdCurrentURL();
    this.getAdSearchName = this.getAdSearchName.bind(this);
  }


  async componentDidMount() {
    try {
      await getProductDetails(this.productID).then(response => {
      // alert(response);
      this.setState({productDetails : response});
      this.setState({macros : this.getMacroNutrients(response.nutritionFacts)})
      //  alert(this.state.macros.protein)
      
    });
  } catch (error) {
    console.log(error.response);
    this.setState({apiFetchError : true})
  }}

  getProductIdCurrentURL () {
    return getParamFromCurrentURL('productId');
  }

  getMacroNutrients ( nutritionFacts ) {
    let macrosAmount = {};
    // alert(macrosAmount);

    let keyNutrientsArray = nutritionFacts.keyNutrients.values;

    for(let i=0; i<keyNutrientsArray.length; i++) {
      let keyNutrientName = keyNutrientsArray[i].mainNutrient.name;
      if(keyNutrientName === TOTAL_FAT || keyNutrientName === TOTAL_CARB || keyNutrientName === PROTEIN) {
        // alert(keyNutrientsArray[i].mainNutrient.amount);
        let amount = keyNutrientsArray[i].mainNutrient.amount;
        amount = amount.replace(/[^\d.-]/g, '');  // It keeps dot for floating point numbers
        macrosAmount[macrosName[keyNutrientName]] = amount;
      }
    }
    return macrosAmount;
  }

  getAdSearchName() {
    if(this.state.productDetails.length === 0) return DEFAULT_SEARCH;

    let productNameSplitList = this.state.productDetails.name.split(',');
    
    let productName = "";
    
    for (let i=0; i<productNameSplitList.length - 1; i++) {
      productName = productName + " " + productNameSplitList[i]  ;
    }
    
    return productName;
    
  }


  render() {
    
    if(this.state.apiFetchError) {
      return (<> <Alert variation="error">Error loading product details ! Please come back in a while. </Alert> </>);
    }

    if(this.state.productDetails.length === 0) {
      
      return (<> 
            <br/><div className='BackToSearch'> <BackLink/> </div>
      <br/><br/><br/> <Loader width="6rem" height="6rem" filledColor="var(--amplify-colors-blue-40)" />  <br/><br/><br/>  </>);
    }
      return (
       <>
          <div align = "center" className='BackToSearch'> <BackLink/> </div>
          <this.getProductPage/>
          
       </>
      );
    }
    // else return (<> hiii </>);

    getProductPage() {
      return ( <div align="center" className = 'OuterMostDiv'>

      <div align = 'center' style={{color: "#636363", display: 'block', borderStyle: "none"}}>

        <div align = 'center' className='SecondOuterDiv '>

            {/* shadow-1  */}
            <div align = 'center' className='InnerMostDiv br3 '> 
              <h3> <b>Macros Distribution</b> </h3>

              
                <div className = "PieChart br3 " >
                      Amount<br/>  Per Gram <br/>
                    <CnfPieChart TYPE={"AmountPerGram"} MACROS = {this.state.macros}/>
                </div> 
                <div className = "PieChart br3 "> 
                    Where do calories<br/>come from ?<br/>
                    <CnfPieChart TYPE={"CaloryDistribution"} MACROS = {this.state.macros}/>
                </div> 
                <br/>                  <br/>

                <NutritionDetails PRODUCT_DETAILS = {this.state.productDetails}/>


            </div>

            <div align = 'left' className='InnerMostDiv'>
                <ProductDetails PRODUCT_DETAILS = {this.state.productDetails} AD_SEARCH={this.getAdSearchName()}/>
            </div>

        </div>

        <RightSideAd AD_SEARCH={this.getAdSearchName()}/>



      </div>



  </div>);
    }
}

export { ProductPage }