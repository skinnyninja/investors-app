import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import configureStore from './redux/store';

import Investors from './containers/Investors/Investors';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const store = configureStore();

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ErrorBoundary>
      <Investors />
    </ErrorBoundary>
  </ReactRedux.Provider>,
  document.getElementById('root'),
);
