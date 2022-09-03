import React from 'react';
import { BackLink, TitleComponent } from '../../utils/common-utils';

class About extends React.Component {


  render() {
    return (
      <>
                <div align = "center" className='BackToSearch'> <BackLink/> </div>
  
        <h3> Hello :)</h3>
        <h2 style={{ color: '#5F6368' }}>We are a new passionate team working to provide accurate Nutrition Facts <br/> and Product information about all the food
        products sold in the USA.<br/><br/><br/> We also provide amazing Discount Coupons for food items<br/> 
        on stores like Amazon.
        <br/><br/><br/>
         As an early customer, we value your presence and request you to fill out <br/> the form
        below to provide your valuable suggestions.  
        </h2>
  
        <br/><br/><br/>
        <a target="_blank" rel="noreferrer" href="https://forms.gle/dCZPAjwWbJ929qqXA">Click Here</a>
        <TitleComponent TITLE="CNF About"/>


      <p/>
      Contact : checknutritionfacts@gmail.com
      </>
      );
  }


}

export { About }