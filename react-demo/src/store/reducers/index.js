import { combineReducers } from 'redux';
// import indexReducer from '../../page/index/redux/reducer.js'
import testReducer from './test/reducer.js'

export default combineReducers({
  testState: testReducer,
});