import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const addLoggingtoDispatch = (store) => (next) => (action) => {
  console.log('Before action:', store.getState());
  console.log(`Action: ${JSON.stringify(action)}`);

  console.log('Next in logger:', next);
  next(action);
  console.log('After action:', store.getState());
}

const logNextinDispatch = store => next => action => {
  console.log('Next in first middleware:', next)
  console.log(store.getState());
  return next(action);
}

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(logNextinDispatch, addLoggingtoDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

export default configureStore;
