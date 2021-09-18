import React from 'react';
import Logo from '../../images/logos/Logo.png';
import '../../style-sheets/header.css';
import { MainCategory } from './main-category';
class Header extends React.Component {

  
  render() {
    return (
    <div className='StyleHeader'>
      <img className='StyleLogo' src={Logo} alt="Logo"/>
      <h2>I am a Car!</h2>
    </div>
    );
  }


}

export { Header }