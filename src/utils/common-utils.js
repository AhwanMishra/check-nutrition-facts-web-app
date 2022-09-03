import { useHistory } from "react-router-dom";
import { Button } from '@mui/material'
import { useEffect } from "react";

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

//https://stackoverflow.com/questions/11401897/get-the-current-domain-name-with-javascript-not-the-path-etc
// Add a single param to a URL already containing some params 

export function addParamToURL(param, value) {

  let currentURL = new URL(window.location.href);
  let currentPath = currentURL.pathname;

  currentURL.searchParams.set(param, value);
  let newAllParams = currentURL.search;
  return currentPath + newAllParams;
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
          <Button style = {{backgroundColor: "#FCE08E"}}onClick={() => history.goBack()}> Back </Button>
        </>
    );
};

export function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    return () => {
      document.title = prevTitle
    }
  })
}

export const TitleComponent = (props) => {
  useTitle(props.TITLE)
  return (
    <></>
  )
}