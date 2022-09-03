import React from "react";
import { Link } from "react-router-dom";


import { addParamToURL } from '../utils/common-utils.js';

import '../style-sheets/search-page/search-page.css';


const makePaginationHref = (pages, active, props) => {
    let pageNumbersArray = [];
    var startIndex, endIndex;
    if (pages <= 10) {
    // less than 10 total pages so show all
    startIndex = 1;
    endIndex = pages;
    } else {
    // more than 10 total pages so calculate start and end pages
    if (active <= 6) {
        startIndex = 1;
        endIndex = 10;
    } else if (active + 4 >= pages) {
        startIndex = pages - 9;
        endIndex = pages;
    } else {
        startIndex = active - 5;
        endIndex = active + 4;
    }
    }

  // add first pagination if startIndex is not the 1
  if (startIndex > 1) {
    
    pageNumbersArray.push(
        <div className="PaginationStyle">

            <Link to={addParamToURL("pageNumber", active - 1)} key="1" onClick={()=>{props.resetPageStateAndFetch(active - 1)}}>
                <span>&lt;</span>
            </Link>
      </div>
    );
  }

  // Outer loop to create parent
  for (let i = startIndex; i <= endIndex; i++) {
    pageNumbersArray.push(
        <div className="PaginationStyle">
      <Link to={addParamToURL("pageNumber", i)} key={i} className={active === i ? "active" : ""} onClick={()=>{props.resetPageStateAndFetch(i)}}>
        {i}
      </Link>
      </div>
    );
  }

  // add last pagination if endPage is not the last pagination
  if (endIndex < pages) {
    pageNumbersArray.push(
        <div className="PaginationStyle">
            <Link to={addParamToURL("pageNumber", active + 1)} key={pages} onClick={()=>{props.resetPageStateAndFetch(active + 1)}}>
                        <span>&gt;</span>

            </Link>
      </div>
    );
  }

  return pageNumbersArray;
};

function Pagination(props) {
  const activePage = parseInt(props.currentPage);
  return (
    <div>
      {makePaginationHref(props.totalPages, activePage, props)}
    </div>
  );
}

export default Pagination;