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
    this.getCalorieInfo = this.getCalorieInfo.bind(this);
    this.getKeyNutrients = this.getKeyNutrients.bind(this);
    this.getVitaminAndMinerals = this.getVitaminAndMinerals.bind(this)
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

  getCalorieInfo (calorieInfo) {
    if(!calorieInfo)
      { return(<></>); }

    return (<>{calorieInfo.mainNutrient.amount}</>);
  }

  getVitaminAndMinerals (vitaminMinerals) {


    if(!vitaminMinerals || !vitaminMinerals.childNutrients || vitaminMinerals.childNutrients.length === 0)
      { return(<></>); }

      var rows = [];
      let childNutrients = vitaminMinerals.childNutrients


      for( let i=0; i<childNutrients.length; i++ ) {

        // let element = []
        // alert(i)
        rows.push(
            <tr class="bb b--black-10 mid-gray">
              <td class="normal pv1"><span class="b">{childNutrients[i].name}</span>
              <span class="ml2"> {childNutrients[i].amount}</span></td>
              <td class="b tr pv1">{childNutrients[i].dvp}</td>
            </tr>
          )


          let childNutrients2 = childNutrients[i].childNutrients;
          if(childNutrients2) {
            for(let k = 0;  k < childNutrients2.length; k++) {
              rows.push(
                <tr class="b--black-10 bb pv1 mid-gray normal">
              <td class="normal pv1" style={{"padding-left": 16}}><span>{childNutrients2[k].name}</span>
              <span class="ml2">{childNutrients2[k].amount}</span></td>
              <td class="normal tr pv1 b">{childNutrients2[k].dvp}</td>
            </tr>);
            }
          }
      }

      return ( <>{rows}</> );


  }

  getKeyNutrients (keyNutrientsObj) {
    if(!keyNutrientsObj || !keyNutrientsObj.values || keyNutrientsObj.values.length === 0)
      { return(<></>); }

      var rows = [];
      let keyNutrients = keyNutrientsObj.values;
      for( let i=0; i<keyNutrients.length; i++ ) {

        // let element = []
        // alert(i)
        if(keyNutrients[i].mainNutrient) {
        rows.push(
            <tr class="bb b--black-10 mid-gray">
              <td class="normal pv1"><span class="b">{keyNutrients[i].mainNutrient.name}</span>
              <span class="ml2"> {keyNutrients[i].mainNutrient.amount}</span></td>
              <td class="b tr pv1">{keyNutrients[i].mainNutrient.dvp}</td>
            </tr>
          )

          let childNutrients = keyNutrients[i].mainNutrient.childNutrients;
          if(childNutrients) {
            for(let j = 0;  j < childNutrients.length; j++) {
              rows.push(
                <tr class="b--black-10 bb pv1 mid-gray normal">
              <td class="normal pv1" style={{"padding-left": 16}}><span>{childNutrients[j].name}</span>
              <span class="ml2">{childNutrients[j].amount}</span></td>
              <td class="normal tr pv1 b">{childNutrients[j].dvp}</td>
            </tr>);
            }
          }
        }

          let childNutrients = keyNutrients[i].childNutrients;
          if(childNutrients) {
            for(let j = 0;  j < childNutrients.length; j++) {
              rows.push(
                <tr class="b--black-10 bb pv1 mid-gray normal">
              <td class="normal pv1" style={{"padding-left": 16}}><span>{childNutrients[j].name}</span>
              <span class="ml2">{childNutrients[j].amount}</span></td>
              <td class="normal tr pv1 b">{childNutrients[j].dvp}</td>
            </tr>);


            let childNutrients2 = childNutrients[j].childNutrients;
            if(childNutrients2) {
              for(let k = 0;  k < childNutrients2.length; k++) {
                rows.push(
                  <tr class="b--black-10 bb pv1 mid-gray normal">
                <td class="normal pv1" style={{"padding-left": 35}}><span>{childNutrients2[k].name}</span>
                <span class="ml2">{childNutrients2[k].amount}</span></td>
                <td class="normal tr pv1 b">{childNutrients2[k].dvp}</td>
              </tr>);
              }
            }
            }
          }
      }

      return ( <>{rows}</> );


  }


  render() {

    

    if(!this.props.PRODUCT_DETAILS.nutritionFacts) return(<></>);

    let nutritionFacts = this.props.PRODUCT_DETAILS.nutritionFacts;

    return (

      // shadow-1
        <div class="bg-white br3 border-box w-100 pa3">
          <section>
              
              {/* Static */}
              <div class="bw1 bb">
                <h3 class="lh-copy b f2 mid-gray mv0">Nutrition facts</h3>
                <p class="lh-title f7 mid-gray mt1 mb2 pb1">Refer to the product label for full dietary information, which may be available as an alternative product image.</p>
              </div>


              <div class="bb" style={{"border-width": 10}}>
                {this.getServingInfo(nutritionFacts.servingInfo)}
              </div>
              <div align = "left" class="mv1"><span>Amount per serving</span></div>         


              {/* Calory Information */}
              
              <div class="flex justify-between bb lh-copy b f2 bw2 pb1"><span>Calories</span><span>{this.getCalorieInfo(nutritionFacts.calorieInfo)}</span></div>
             
             
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
                  {this.getKeyNutrients(nutritionFacts.keyNutrients)}
                </tbody>

                {/* vitaminMinerals */}
                <tbody class="bb bw2 b--black">
                  {this.getVitaminAndMinerals(nutritionFacts.vitaminMinerals)}

              
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