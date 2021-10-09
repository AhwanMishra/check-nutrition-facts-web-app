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
        <a href={this.props.LINK}>
          <img className='StyleLogo' src={this.props.IMAGE_PATH} alt=""/>
          <br/>
          {this.props.LABEL}
        </a>
      </div>
      
      );
  }

}

export { MainCategory }