import { combineReducers } from 'redux';
import products from '../containers/Investors/reducer';

const rootReducer = combineReducers({
  investors: products,
});

export default rootReducer;
