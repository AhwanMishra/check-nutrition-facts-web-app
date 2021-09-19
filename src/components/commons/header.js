import React from 'react';
import Logo from '../../images/logos/Logo.png';
import '../../style-sheets/commons/commons.css';
class Header extends React.Component {

  
  render() {
    return (
    <div className='StyleHeader'>
      <img className='StyleLogo' src={Logo} alt="Logo"/>
    </div>
    );
  }


}

export { Header }