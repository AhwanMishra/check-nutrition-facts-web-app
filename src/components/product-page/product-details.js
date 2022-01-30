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

  render() {
    return (


    <div style={{"padding" : 18}} className = "br3 shadow-1">
        <div align="center" className = "br3 shadow-1">
          <br/><br/><br/>
          <img src="https://i5.walmartimages.com/asr/a470ee65-2091-4822-983f-0f6d1aeedd47.623214f477d78df440e68d75e13422e2.jpeg?odnHeight=150&odnWidth=150"></img>
        </div>
        <br/>
<b>Product Details</b><br/>

        Made with vine-ripened tomatoes, garlic and onions for a delicious family favorite Contains 1-1/2 servings of veggies in every 1/2 cup of sauce Sauce that is slowly simmered in tradition for a taste that families crave Available in 14oz, 24oz, 45oz and 66oz jars
<br/>
<br/>
<b>Ingredients</b>
<br/>
Tomato Puree (Water, Tomato Paste), Diced Tomatoes In Puree [Diced Tomatoes, Tomato Puree, Calcium Chloride (Firming Aid), Citric Acid], Sugar, Soybean Oil, Onion, Salt, Dehydrated Onion, Spices, Garlic Powder, Natural Flavors.

<div align='center'>
  <a href={AMAZON_BUY_BUTTON.LINK} target="_blank">
    <img className='BuyButton' src={AMAZON_BUY_BUTTON.IMAGE_PATH} alt={AMAZON_BUY_BUTTON.ALT}/>
  </a>
</div>



      </div>

    );
  }
}

export { ProductDetails }