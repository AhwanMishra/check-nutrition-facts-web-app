import React from 'react';

import '../../style-sheets/home-page/home-page.css';
class SearchBoxAndTitle extends React.Component {


  render() {
    return (

    <>
    <div className="CenterMainTitle"> Check Nutrition Facts </div>

          <div className="SearchBoxDiv">
            <input
                type = "text"
                placeholder ="Search for any Food of any brand"
                className = "SearchBox"
             />
          </div>
          </>
    );
  }


}

export { SearchBoxAndTitle }