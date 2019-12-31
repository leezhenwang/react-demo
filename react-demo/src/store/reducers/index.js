import { combineReducers } from 'redux';
import indexReducer from '../../page/index/redux/reducer.js'
import testReducer from '../../page/test/redux/reducer.js'

const reducerMap = {
  indexState: indexReducer,
  testState: testReducer,
};

export default combineReducers(reducerMap);