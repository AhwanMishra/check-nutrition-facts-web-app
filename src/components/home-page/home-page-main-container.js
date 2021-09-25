import React from 'react';

import '../../style-sheets/home-page/home-page.css';
import { SearchBoxAndTitle } from '../home-page/search-box-and-title.js';

class HomePageMainContainer extends React.Component {


  render() {
    return (
      <SearchBoxAndTitle/>
    );
  }


}

export { HomePageMainContainer }