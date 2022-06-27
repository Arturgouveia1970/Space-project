import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger/src';
import rockets from './rockets/rockets';

const rootReducer = combineReducers({
  rockets,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
