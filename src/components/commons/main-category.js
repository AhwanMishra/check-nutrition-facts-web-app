import React from 'react';
import '../../style-sheets/commons/commons.css';


class MainCategory extends React.Component {
  
  
//  constructor(props) {
//
//    super(props);
//    this.state = {title : this.props.title};
//  };


  render() {
    return (
      <div className="MainCategory">
        <img className='StyleLogo' src={this.props.PATH} alt=""/>
        <br/>
        {this.props.LABEL}
      </div>
      );
  }
}

export { MainCategory }