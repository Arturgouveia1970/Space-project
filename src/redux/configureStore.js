import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger/src';
import rockets from './rockets/rockets';
import missions from './missions/missions';

const rootReducer = combineReducers({
  rockets,
  missions,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
