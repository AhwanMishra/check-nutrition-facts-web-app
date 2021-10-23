import Multiselect from 'multiselect-react-dropdown';
import { SEARCH_FILTER_OPTIONS } from '../../constants/search-filter-constants'


import React, { Component } from 'react';


export class SearchFilter extends Component {


  onSelect = (selectedList, selectedItem) => {

    // alert(selectedItem.val);
  }

  onRemove(selectedList, removedItem) {
    // alert(removedItem.val);
  }


  render() {
    return (
      <div align ='center' className='SearchFilter'>
        <Multiselect
                options={SEARCH_FILTER_OPTIONS}
                displayValue="key"
                placeholder="   Sort By"
                showCheckbox={true}
                showArrow={true}
                onSelect={this.onSelect}
                onRemove={this.onRemove}
                style = {styleObject}
              />     
      </div>
    )
  }


}

//https://github.com/srigar/multiselect-react-dropdown for CSS details
const styleObject = {

  multiselectContainer : {
    "text-align": 'left',
    width: 'max-content',
    display : 'inline-block'
  },

  searchBox : {
    width : 300,
    },

  optionContainer: { // To change css for option container 
    width: 300
  },
  option: { // To change css for dropdown options
    "background-color" : "white",
    "color" : "#5F6368",
    "font-family" : 'Google Sans',

    },
    chips: { // To change css chips(Selected options)
      background: '#4285F4',
      color: "white"
      },
  // option: hover{ // To change css for dropdown options
  //   "background-color" : "white"
  //   },
     
}
