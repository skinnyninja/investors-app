import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

const configureStore = () => {
  let store: any = null;
  if (process.env.NODE_ENV !== 'production') {
    store = composeWithDevTools(
      applyMiddleware(thunkMiddleWare),
    )(createStore)(reducers);
  } else {
    store = applyMiddleware(thunkMiddleWare)(createStore)(reducers);
  }

  return store;
};

export default configureStore;
