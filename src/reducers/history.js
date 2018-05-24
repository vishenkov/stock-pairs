import {
  REQUEST_STOCK_HISTORY,
  RECEIVE_STOCK_HISTORY,
  INVALIDATE_STOCK_HISTORY,
} from '../actions';

const initialState = {
  isFetchingHistory: false,
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STOCK_HISTORY:
      return {
        ...state,
        isFetchingHistory: true
      };

    case RECEIVE_STOCK_HISTORY:
      return {
        ...state,
        history: action.history,
        isFetchingHistory: false
      };

    default:
      return state;
  }
};