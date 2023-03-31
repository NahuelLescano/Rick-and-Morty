// config from Redux homework 11-redux/homework/01 - excersice/
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/reducer';

const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  componseEnhancer(applyMiddleware(thunk))
);

export default store;
