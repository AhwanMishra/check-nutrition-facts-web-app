
import React from 'react';
import { SearchAdConfiguration , searchAdUrl} from './ad-script/script';
import postscribe from 'postscribe';

const util = require('util');
class RightSideAd extends React.Component {

  constructor(){
    super();
    this.pageSpecificDetails();

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
        'Belvita Cinnamon Brown Sugar Breakfast' , 3);
        break;
      case '/':
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
}
 

export { RightSideAd };