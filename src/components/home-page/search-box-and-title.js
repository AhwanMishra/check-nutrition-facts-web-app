import React from 'react';

import '../../style-sheets/home-page/home-page.css';
import { SearchBox } from '../home-page/search-box'

class SearchBoxAndTitle extends React.Component{
  render() {
    return(
      <>
        <div className="CenterMainTitle"> Check Nutrition Facts </div>
        <SearchBox/>
      </>
    );
  }

}

export { SearchBoxAndTitle }