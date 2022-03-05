import React from 'react';

import '../../style-sheets/product-details/product-details.css';

/*
To add:
Score
Recommendation
Back & Category Navigation
*/
class NutritionDetails extends React.Component {
  
  constructor(props) {
    super(props);
    this.getServingInfo = this.getServingInfo.bind(this);
  }

  getServingInfo(servingInfo) {
    if(!servingInfo)
      { return(<></>); }

    var rows = [];

    for(let i=0; i< servingInfo.values.length; i++) {
      rows.push(<p class="flex justify-between dark-gray mv1 lh-copy"><span>{servingInfo.values[i].name}</span><span>{servingInfo.values[i].value}</span></p>);
    }
    
    return ( <>{rows}</> );
  }


  render() {

    if(!this.props.PRODUCT_DETAILS.nutritionFacts) return(<></>);

    let nutritionFacts = this.props.PRODUCT_DETAILS.nutritionFacts;

    return (


        <div class="bg-white br3 shadow-1 border-box w-100 pa3">
          <section>
              
              {/* Static */}
              <div class="bw1 bb">
                <h3 class="lh-copy b f2 dark-gray mv0">Nutrition facts</h3>
                <p class="lh-title f7 mid-gray mt1 mb2 pb1">Refer to the product label for full dietary information, which may be available as an alternative product image.</p>
              </div>


              <div class="bb" style={{"border-width": 10}}>
                {this.getServingInfo(nutritionFacts.servingInfo)}
              </div>         


              {/* Calory Information */}
              
              <div class="flex justify-between bb lh-copy b f2 bw2 pb1"><span>Calories</span><span>70</span></div>
             
             
              <table class="w-100 collapse">

                {/* Static */}
                <thead>
                    <tr class="bb b b--black-10">
                      <th class="pv1" scope="col"><span class="w_Dr">Amount per serving</span> </th>
                      <th class="tr pv1" scope="col">% Daily Value*</th>
                    </tr>
                </thead>


                {/* keyNutrients */}
                <tbody class="bb b--black dark-gray lh-copy" style={{"border-width": 10}}>
                    <tr class="bb b--black-10 mid-gray">
                      <td class="normal pv1"><span class="b">Total Fat</span><span class="ml2"> 1g</span></td>
                      <td class="b tr pv1">1%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left": 16}}><span>Saturated Fat</span><span class="ml2">0.0g</span></td>
                      <td class="normal tr pv1 b">0%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 16}}><span>Trans Fat</span><span class="ml2">0.0g</span></td>
                      <td class="normal tr pv1 b">-%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 16}}><span>Polyunsaturated Fat</span><span class="ml2">0.0g</span></td>
                      <td class="normal tr pv1 b"></td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 16}}><span>Monounsaturated Fat</span><span class="ml2">0.0g</span></td>
                      <td class="normal tr pv1 b"></td>
                    </tr>
                    <tr class="bb b--black-10 mid-gray">
                      <td class="normal pv1"><span class="b">Cholesterol</span><span class="ml2"> 0.0mg</span></td>
                      <td class="b tr pv1">0%</td>
                    </tr>
                    <tr class="bb b--black-10 mid-gray">
                      <td class="normal pv1"><span class="b">Sodium</span><span class="ml2"> 95.0mg</span></td>
                      <td class="b tr pv1">4%</td>
                    </tr>
                    <tr class="bb b--black-10 mid-gray">
                      <td class="normal pv1"><span class="b">Total Carbohydrate</span><span class="ml2"> 12g</span></td>
                      <td class="b tr pv1">4%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 16}}><span>Dietary Fiber</span><span class="ml2">0.0g</span></td>
                      <td class="normal tr pv1 b">0%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 16}}><span>Sugars</span><span class="ml2">2.0g</span></td>
                      <td class="normal tr pv1 b">3%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 32}}><span>Includes Added Sugars</span><span class="ml2">2g</span></td>
                      <td class="normal tr pv1 b"></td>
                    </tr>
                    <tr class="bb b--black-10 mid-gray">
                      <td class="normal pv1"><span class="b">Protein</span><span class="ml2"> 2.0g</span></td>
                      <td class="b tr pv1">-%</td>
                    </tr>
                </tbody>

                {/* vitaminMinerals */}
                <tbody class="bb bw2 b--black">
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Vitamin A</span><span class="ml2"></span></td>
                      <td class="normal tr pv1">0%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Vitamin C</span><span class="ml2"></span></td>
                      <td class="normal tr pv1">0%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Calcium</span><span class="ml2">50.0mg</span></td>
                      <td class="normal tr pv1">4%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Potassium</span><span class="ml2">0.0mg</span></td>
                      <td class="normal tr pv1">0%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Iron</span><span class="ml2">0.9mg</span></td>
                      <td class="normal tr pv1">6%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Vitamin D</span><span class="ml2">0.0mcg</span></td>
                      <td class="normal tr pv1">0%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Thiamin</span><span class="ml2">0.2mg</span></td>
                      <td class="normal tr pv1">15%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Riboflavin</span><span class="ml2">0.1mg</span></td>
                      <td class="normal tr pv1">6%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Niacin</span><span class="ml2">1.1mg</span></td>
                      <td class="normal tr pv1">6%</td>
                    </tr>
                    <tr class="b--black-10 bb pv1 mid-gray normal">
                      <td class="normal pv1" style={{"padding-left" : 0}}><span>Folic Acid</span><span class="ml2">30.0mcg</span></td>
                      <td class="normal tr pv1">-%</td>
                    </tr>
                </tbody>


              </table>

              
              
              
              {/* Static */}
              <div class="mt2 mid-gray f7">
                <p class="mv0">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. </p>
                <hr class="b--black-10" size="1"/>
                <p class="mv0">Calories per gram:</p>
                <p class="mv0">Fat 9 • Carbohydrate 4 • Protein 4  </p>
              </div>
              
          </section>
        </div>

    );
  }


}

export { NutritionDetails }