import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { URI_BASE_ZEOSHUB } from '../../constants';

export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const FETCH_PRODUCT_REJECTED = 'FETCH_PRODUCT';
export const FETCH_ACTIVE_PRODUCT = 'FETCH_ACTIVE_PRODUCT';
export const FETCH_WHITELIST = 'FETCH_WHITELIST';

import performanceData from '../../static/json/performanceData.json';

export function isWhitelist(token: string) {
  const idTokenParsed: any = token !== '' ? jwt_decode(token) : '';
  return (dispatch: any) => {
    axios.get('/whitelist/' + idTokenParsed.sub).then((res) => {
      if (res.data.indexOf('investor_performance_app') > -1) {
        dispatch(dispatchWhitelist(true ,res.data));
      } else {
        dispatch(dispatchWhitelist(false, null));
        return window.location.href = URI_BASE_ZEOSHUB;
      }
    }).catch((err: any) => {
      console.error(err);
    });
  };
}

export function retrieveProducts() {
  return (dispatch: any) => {
    // axios.get('/performance/').then((res) => {
    //   const products = res.data.products;

    //   dispatch(dispatchProducts(products));
    //   dispatch(dispatchActiveProduct(products[0]));
    // }).catch((err: any) => {
    //   console.error(err);
    //   dispatch(dispatchProductsError(err));
    // });
    // console.log(performanceData);

    dispatch(dispatchProducts(performanceData.products));
    dispatch(dispatchActiveProduct(performanceData.products[0]));
  };
}

export function handleActiveProduct(product: any) {
  return (dispatch: any) => dispatch(dispatchActiveProduct(product));
}

export function dispatchProducts(products: any) {
  return {
    type: FETCH_PRODUCT,
    payload: products,
  };
}

export function dispatchProductsError (error: any) {
  return {
    type: FETCH_PRODUCT_REJECTED,
    payload: error,
  };
}

export function dispatchActiveProduct(product: any[]) {
  return {
    type: FETCH_ACTIVE_PRODUCT,
    payload: product,
  };
}

export function dispatchWhitelist(isListed: boolean, list: string[] = null) {
  return {
    type: FETCH_WHITELIST,
    payload: { isListed, list },
  };
}
