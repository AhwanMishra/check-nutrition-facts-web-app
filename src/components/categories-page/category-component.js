import React from 'react';
import '../../style-sheets/commons/commons.css';

class CategoryComponent extends React.Component {
  

  render() {
    return (
      <div className="CategoryComponent">
        <a href={ this.props.LINK }>
          <img className='DefaultCategoryImage' src={this.props.IMAGE_LINK} alt="image"/>
          <br/>
          { this.props.LABEL }
        </a>
      </div>
      
      );
  }

}

export { CategoryComponent }