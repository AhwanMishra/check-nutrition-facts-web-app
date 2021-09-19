import React from 'react';

import { HomePageCenterOfHW } from './home-page-center.js';
import { Header } from '../commons/header.js';
import { LeftPanel } from '../commons/left-panel.js';

import '../../style-sheets/home-page/home-page.css';
class HomePage extends React.Component {


  render() {
    return (
    <div className="HomePageDefaults">
        
        <Header/>
                
        <div className="HomePageCenter"> 
          
          <LeftPanel/>
          
          <HomePageCenterOfHW/>
        
        </div>

    </div>
    );
  }


}

export { HomePage }