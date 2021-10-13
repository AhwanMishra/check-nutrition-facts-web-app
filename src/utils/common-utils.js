import { useHistory } from "react-router-dom";

export function reDirect(history, path, params) {

  history.push({
          pathname: path,
          search: "?" + new URLSearchParams(params).toString()
        })

}

// Build a new URL with params

export function buildNewUrl(path, params) {
  return path + "?" + new URLSearchParams(params).toString();
}

// Add a single param to a URL already containing some params 

export function addParamToURL(param, value) {

    let existingParam = getParamFromCurrentURL(param);

    // Replace & return if it is already present
    if(existingParam !== null) {
      let currentURL = new URL(document.location);
      currentURL.searchParams.set(param, value);
      return currentURL;
    }
    
    // Add & return otherwise
    if(window.location.search === "") {
      return window.location.href + "?"+param+"="+value;
    } else {
      return window.location.href + "&"+param+"="+value;
    }
  }

export function getParamFromCurrentURL (param) {

      let params = (new URL(document.location)).searchParams;
      let value = params.get(param);
      return value;
    }


export const BackLink = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()}> Back </button>
        </>
    );
};