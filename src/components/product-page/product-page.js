import React from 'react';

import { RightSideAd } from '../commons/ads/right-side-ad';
import { CnfPieChart } from './pie-chart';
import { ProductDetails } from './product-details';
import '../../style-sheets/product-details/product-details.css';

/*
To add:
Score
Recommendation
Back & Category Navigation
*/
class ProductPage extends React.Component {


  render() {
    return (
      <div className = 'OuterMostDiv'>
        
        <div align = 'center' style={{color: "#636363"}}>

            <div align='left' className="ProductSection">
                <b>Macros Distribution</b>
            </div>

            <div align = 'left' className='InnerMostDiv'>
                <div className = "PieChart">
                      Amount<br/>  Per Gram <br/>
                    <CnfPieChart TYPE={"AmountPerGram"} FAT={30} CARB={60} PROTEIN={30}/>
                </div> 
                <div className = "PieChart"> 
                    Where do calories<br/>come from ?<br/>
                    <CnfPieChart TYPE={"CaloryDistribution"} FAT={30} CARB={60} PROTEIN={30}/>
                </div> 

            </div>

            <div align = 'left' className='InnerMostDiv'>
              <ProductDetails/>
            </div>

            <RightSideAd/>



        </div>



    </div>
    );
  }


}

export { ProductPage }