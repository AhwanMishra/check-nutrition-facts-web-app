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