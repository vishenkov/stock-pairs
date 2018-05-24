import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import stocks from './stocks';

const rootReducer = combineReducers({
  router: routerReducer,
  stocks
});

export default rootReducer;
