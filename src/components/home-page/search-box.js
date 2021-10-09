import React from 'react';

import '../../style-sheets/home-page/home-page.css';
import { useHistory } from "react-router-dom";
import { MAIN_CATEGORY_PATHS } from '../../constants/app-paths';
import  { MAIN_CATEGORIES }  from '.././../constants/main-category.js'


function SearchBox (){

  const history = useHistory();
  const [textInput, setTextInput] = React.useState('');

  const handleRoute = () =>{ 
      history.push({
              pathname: MAIN_CATEGORY_PATHS.SEARCH_RESULTS,
              search: "?" + new URLSearchParams({'q': textInput}).toString()
            })
  }
  
  const handleChange = (event) => {
      let inputText = event.target.value.trim();
      if(inputText.length < 45) 
        setTextInput(inputText);
    }


    return (
      <>
        <div className="SearchBox">
            <table width='100%'>
                <tr va>
                    <td  valign='middle'>
                        <img className='SearchBoxImage' src={MAIN_CATEGORIES.SEARCH.IMAGE_PATH} alt=""/>
                    </td>

                    <td valign='center' align='left'>
                        <input
                                type = "text"
                                className="SearchBoxInput"
                                placeholder ="Search for any Food of any brand"
                                onChange={handleChange}
                                onKeyPress={
                                    event => {
                                        if (event.key === 'Enter') {
                                            handleRoute()
                                        }
                                    } 
                                }
                        />
                    </td>
                </tr>
            </table>

                <div onClick={handleRoute} className={textInput.length > 0 ? 'SearchBoxSecondRow_SearchItem' : 'SearchBoxSecondRow_Hidden'}>
                    <table width='100%'>
                        <tr va>
                            <td  valign='middle'>
                                <img className='SearchBoxImage' src={MAIN_CATEGORIES.SEARCH.IMAGE_PATH} alt=""/>
                            </td>

                            <td valign='center' align='left'>
                                Search for "{textInput}"
                            </td>
                         </tr>
                    </table>
                </div>

        </div>
      </>
    );

}

export { SearchBox }