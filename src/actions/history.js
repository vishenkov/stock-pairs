import axios from 'axios';

export const REQUEST_STOCK_HISTORY = 'REQUEST_STOCK_HISTORY';
export const RECEIVE_STOCK_HISTORY = 'RECEIVE_STOCK_HISTORY';
export const INVALIDATE_STOCK_HISTORY = 'INVALIDATE_STOCK_HISTORY';

const startHistoryFetching = () => ({
  type: REQUEST_STOCK_HISTORY,
});

const invalidateHistory = error => {
  return {
    type: INVALIDATE_STOCK_HISTORY,
    error,
  }
}

const receiveHistory = history => ({
  type: RECEIVE_STOCK_HISTORY,
  history,
});

export const requestStockHistory = stock =>
  async dispatch => {
    dispatch(startHistoryFetching());

    try {
      const endDate = Math.floor(Date.now() / 1000);
      const startDate = endDate - 24 * 60 * 60;
      const history = await axios.get(`https://poloniex.com/public?command=returnTradeHistory&currencyPair=${stock}&start=${startDate}&end=${endDate}`);
      return dispatch(receiveHistory(history.data));
    } catch (error) {
      return dispatch(invalidateHistory(error))
    }
};