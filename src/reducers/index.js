import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import stocks from './stocks';
import history from './history';

const rootReducer = combineReducers({
  router: routerReducer,
  stocks,
  history,
});

export default rootReducer;
