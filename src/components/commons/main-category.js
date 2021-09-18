import React from 'react';

//import Logo from '../../images/logos/Logo.png';
//import '../../style-sheets/header.css';
class MainCategory extends React.Component {
  
  
//  constructor(props) {
//
//    super(props);
//    this.state = {title : this.props.title};
//  };


  render() {
    return ("hii" + this.props.title + this.props.url);
  }
}

export { MainCategory }