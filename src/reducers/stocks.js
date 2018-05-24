import {
  REQUEST_STOCKS,
  RECEIVE_STOCKS,
  INVALIDATE_STOCKS,
} from '../actions';

const initialState = {
  isFetchingStocks: false,
  stocks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STOCKS:
      return {
        ...state,
        isFetchingStocks: true
      };

    case RECEIVE_STOCKS:
      return {
        ...state,
        stocks: action.stocks,
        isFetchingStocks: false
      };

    default:
      return state;
  }
};