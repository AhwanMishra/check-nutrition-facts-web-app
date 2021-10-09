import React from 'react';

class CommonCategoryRenderer extends React.Component {

// Take a list of categories and render all in same line, it will be displayed 
// as required as per the display size 

  render() {
    return (
    <>
    Hiiii !
      <div className="">
        <a href={this.props.LINK}>
          <img className='' src={this.props.IMAGE_PATH} alt=""/>
          <br/>
          {this.props.LABEL}
        </a>
      </div>

    </>
    );
  }


}

export { CommonCategoryRenderer }