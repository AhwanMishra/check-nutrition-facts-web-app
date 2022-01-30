import React from 'react';
import '../../style-sheets/home-page/home-page.css';

class GoogleCustomSearchBox extends React.Component {
    componentDidMount() {
        (function() {
          var cx = '40e5da2dc9aa5bda0';
          var gcse = document.createElement('script');
          gcse.type = 'text/javascript';
          gcse.async = true;
          gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(gcse, s);
        })();
      }

      render() {
        return (<>
            <div class="GoogleCustomSearchBox">
                <div className='gcse-search'></div>
            </div>
        </>);
      }
}

export { GoogleCustomSearchBox }