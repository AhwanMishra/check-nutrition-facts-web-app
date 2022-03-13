import { API } from "@aws-amplify/api";
import { CNF_SERVICE_NAME, CNF_SERVICE_API_KEY, SEARCH_PATH, ADS_PATH, PRODUCT_DETAILS_PATH} from './apiConstants';


const defaultInit = {
  headers: { 
    "x-api-key" : CNF_SERVICE_API_KEY,
  } 
};

export async function getSearchByCategory(category, subCategory, pageNumber) {
  
  let cfnInit = defaultInit;
  
  cfnInit.queryStringParameters = {
    "category": category,
    "sub-category": subCategory,
    "pageNumber" : pageNumber
  }
  
  return await getResponse(CNF_SERVICE_NAME, SEARCH_PATH, cfnInit);
}

export async function getAds(pageNumber) {
  
  let cfnInit = defaultInit;
  
  cfnInit.queryStringParameters = {
    "pageNumber" : pageNumber
  }
  
  return await getResponse(CNF_SERVICE_NAME, ADS_PATH, cfnInit);
}

export async function getProductDetails(productId) {
  
  let cfnInit = defaultInit;
  let finalPath = PRODUCT_DETAILS_PATH + "/" + productId
  return await getResponse(CNF_SERVICE_NAME, finalPath, cfnInit);

}

async function getResponse(apiName, path, cfnInit) {
  try {
    const response = await API.get(apiName, path, cfnInit);
    return response;
  } catch (error) {
    console.log(error.response);
  }
}