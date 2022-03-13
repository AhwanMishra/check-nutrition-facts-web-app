
import React from 'react';
import { SearchAdConfiguration , searchAdUrl} from './ad-script/script';
import postscribe from 'postscribe';
import "../../../style-sheets/commons/commons.css";


const util = require('util');

const DEFAULT_SEARCH = 'best sellers';

class RightSideAd extends React.Component {

  //If you are adding a constructor & you have props, then you have to mention it.
  constructor(props){
    super(props);
    this.pageSpecificDetails();
    this.getDesktopAd = this.getDesktopAd.bind(this);
  }
  
  render()  {
    return (
      <div className="RightSideAd">
      <div className="mt-3 item__wrapper" id="amazon-ads-container"> 
        <div id="amazon-search-container">&nbsp;</div>
        <div id="amzn_assoc_ad_div_adunit0_0">&nbsp;</div>
      </div>  
    </div>
    );
  }

  pageSpecificDetails() {
    switch (window.location.pathname) {

      case '/product-details':
        
          this.finalSearchAdConfiguration = util.format(SearchAdConfiguration , 'Buy from Amazon :',
          this.props.propsFromParent.AD_SEARCH , 3);
          break;

      case '/':
          this.finalSearchAdConfiguration = util.format(SearchAdConfiguration , 'Suggested Foods',
          DEFAULT_SEARCH , 2);
          break;

      case '/search':
          this.finalSearchAdConfiguration = util.format(SearchAdConfiguration , 'Buy from Amazon :',
          this.props.propsFromParent.QUERY , 3);
          break;

      case '/categories':
        this.finalSearchAdConfiguration = util.format(SearchAdConfiguration , 'Buy from Amazon :',
        this.props.propsFromParent.TO_SEARCH , 2);
        break;

      
      default:
        this.finalSearchAdConfiguration = util.format(SearchAdConfiguration , 'Suggested Foods',
          'Protein' , 2);
    }
  }
  

  componentDidMount() {
    const div = document.createElement('div')
    div.id = 'amzn_assoc_ad_div_adunit0_0'
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = searchAdUrl
    const s = document.createElement('script')
    s.type = 'text/javascript'
    const code = this.finalSearchAdConfiguration  
    s.appendChild(document.createTextNode(code))
        postscribe(
      '#amazon-search-container',
      `<script
        language="javascript"
        src="${searchAdUrl}"></script>`
    )
    const dom = document.getElementById('amazon-search-container')
    if(dom) {
      dom.appendChild(s)
      dom.appendChild(script)
    }
  }


  getDesktopAd() {
      return (
        <div className="MobileAd">
      <div className="mt-3 item__wrapper" id="amazon-ads-container"> 
        <div id="amazon-search-container">&nbsp;</div>
        <div id="amzn_assoc_ad_div_adunit0_0">&nbsp;</div>
      </div>  
    </div>);
  }
}




 

export { RightSideAd, DEFAULT_SEARCH };