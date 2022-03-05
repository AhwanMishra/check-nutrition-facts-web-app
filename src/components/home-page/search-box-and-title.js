import React from 'react';

import '../../style-sheets/home-page/home-page.css';
import { GoogleCustomSearchBox } from '../home-page/google-custom-search-box';

class SearchBoxAndTitle extends React.Component{
  render() {
    return(
      <>
        <div className="CenterMainTitle"> Check Nutrition Facts </div>
        <GoogleCustomSearchBox/>
        {/* <SearchBox/> */}
      </>
    );
  }

}

export { SearchBoxAndTitle }