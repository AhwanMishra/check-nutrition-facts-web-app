import React from 'react';
import { BackLink} from '../../utils/common-utils';

class Blogs extends React.Component {


  render() {
    return (
    <>
                <div align = "center" className='BackToSearch'> <BackLink/> </div>

      <h3>Coming Soon.</h3>


      <h1 style={{ color: '#5F6368' }}>We will feature blogs specific to healthy and nutritious food in this page. 
      <br/>If you want to add your food blog with back links please contact us. </h1>
      <h2>checknutritionfacts@gmail.com</h2>
      </>
    );
  }


}

export { Blogs }