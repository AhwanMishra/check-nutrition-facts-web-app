import React from 'react';
import { ProductComponent } from './product-component'
import { RightSideAd } from '../commons/ads/right-side-ad';
import '../../style-sheets/search-page/search-page.css';



class SearchResults extends React.Component {


  render() {
    return (
    <>
      <div className='ProductResultContainer'>

          <label className='SearchResultsText'>Search Results for <i>"{this.getSearchQueryFromCurrentURL()}"</i>.</label>
          <div className='BackToSearch'> <a href = '/'> Back To Search </a> </div>
          
        <div className='ProductResults'>
          <this.productResults/>
        </div>
      </div>
      

      <RightSideAd QUERY = {this.getSearchQueryFromCurrentURL()} className="RightSideAd"/>
      
    </>
    );
  }

  getSearchQueryFromCurrentURL () {

    let params = (new URL(document.location)).searchParams;
    let query = params.get("q");
    return query;
  }


  productResults() {
    var rows = [];
    for(let i=0; i<7; i++) {
      rows.push(
        <ProductComponent IMAGE_LINK = 'https://i5.walmartimages.com/asr/dac4f4eb-02d5-4432-9069-33c8e4608bcb_1.c6c32e75f7fc4bf6c22720ec63249994.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF'
          LABEL='Freshness Guaranteed White Sub Rolls, 16 oz, 6 Count at Walmart'
          LINK='/product-details'
        />
      )
    }
    rows.push(
      <ProductComponent IMAGE_LINK = 'https://i5.walmartimages.com/asr/dac4f4eb-02d5-4432-9069-33c8e4608bcb_1.c6c32e75f7fc4bf6c22720ec63249994.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF'
        LABEL='Freshness Guaranteed White Sub Rolls, 16 oz, 6 Count at Walmart more text more text motre df dfd df fd dfg'
        LINK='/product-details'
      />
    )

    if(true) {
      return ( <>{rows}</> );
    }
    else return (
      <div className="ProductNotAvailable">
        Sorry ! The item you are looking for is not available in our database.
      </div>
      );
  }
  


}



export { SearchResults }