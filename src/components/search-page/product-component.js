import React from 'react';
import '../../style-sheets/search-page/search-page.css';

class ProductComponent extends React.Component {
  

  render() {
    return (
      <div className="ProductComponent">
        <a href={ this.props.LINK }>
          <img className='ProductImage' src={this.props.IMAGE_LINK} alt=""/>
          <br/>
          { this.props.LABEL }
        </a>
      </div>
      
      );
  }

}

export { ProductComponent }