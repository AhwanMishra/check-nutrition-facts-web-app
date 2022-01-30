import React from 'react';

import { RightSideAd } from '../commons/ads/right-side-ad';
import { CnfPieChart } from './pie-chart';
import { ProductDetails } from './product-details';
import '../../style-sheets/product-details/product-details.css';
import { NutritionDetails } from './nutrition-details';

/*
To add:
Score
Recommendation
Back & Category Navigation
*/
class ProductPage extends React.Component {


  render() {
    return (
      <div align="center" className = 'OuterMostDiv'>
        
        <div align = 'center' style={{color: "#636363", display: 'block', borderStyle: "none"}}>

          <div align = 'center' className='SecondOuterDiv '>

              <div align = 'center' className='InnerMostDiv br3 shadow-1'>
                <h3> <b>Macros Distribution</b> </h3>
                  <div className = "PieChart br3 shadow-1" >
                        Amount<br/>  Per Gram <br/>
                      <CnfPieChart TYPE={"AmountPerGram"} FAT={30} CARB={60} PROTEIN={30}/>
                  </div> 
                  <div className = "PieChart br3 shadow-1"> 
                      Where do calories<br/>come from ?<br/>
                      <CnfPieChart TYPE={"CaloryDistribution"} FAT={30} CARB={60} PROTEIN={30}/>
                  </div> 
                  <br/>                  <br/>

                  <NutritionDetails/>


              </div>

              <div align = 'left' className='InnerMostDiv'>
                <ProductDetails/>
              </div>

          </div>

          <RightSideAd/>



        </div>



    </div>
    );
  }


}

export { ProductPage }