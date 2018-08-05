import * as ACTIONS from './action';

// State argument is nor application state, only the state this reducer is responsible for

const initialState: any = {
  loading: true,
  products: null,
  activeProduct: null,
  error: false,
  whitelist: {
    isListed: false,
    list: null,
  },
};

export default function investors(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.FETCH_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case ACTIONS.FETCH_PRODUCT_REJECTED: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case ACTIONS.FETCH_ACTIVE_PRODUCT: {
      return {
        ...state,
        loading: false,
        activeProduct: action.payload,
      };
    }
    case ACTIONS.FETCH_WHITELIST: {
      return {
        ...state,
        whitelist: action.payload,
      };
    }
  }
  return state;
}
