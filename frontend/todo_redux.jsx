import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  var store = configureStore(preloadedState);
  // store = applyMiddlewares(store, addLoggingtoDispatch);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
