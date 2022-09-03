import React from 'react';
import { BackLink, TitleComponent } from '../../utils/common-utils';

class HealthyFoods extends React.Component {

  render() {
    return (
      <>
                <div align = "center" className='BackToSearch'> <BackLink/> </div>
  
        <h3> Hello :)</h3>
        <h2 style={{ color: '#5F6368' }}> In this page we will provide you a list of healthy foods based on nutrional values.
        <br/> <br/>We will add ranking, sort and comparision feature<br/> to help you find the best food for you for each food category.</h2>
        <br/> <br/><h3> As of now, Please visit the Category page to find the list of all food items.</h3>
        <br/><br/><br/>
        <TitleComponent TITLE="CNF About"/>


      <p/>
      Contact : checknutritionfacts@gmail.com
      </>
      );
  }


}

export { HealthyFoods }