import React from 'react';
import '../../style-sheets/categories-page/categories-page.css';

class CategoryComponent extends React.Component {
  

  render() {
    return (
      <div className="CategoryComponent">
        <a href={ this.props.LINK }>
          <img className='CategoryImage' src={this.props.IMAGE_LINK} alt=""/>
          <br/>
          { this.props.LABEL }
        </a>
      </div>
      
      );
  }

}

export { CategoryComponent }