import axios from 'axios';

export const REQUEST_STOCKS = 'REQUEST_STOCKS';
export const RECEIVE_STOCKS = 'RECEIVE_STOCKS';
export const INVALIDATE_STOCKS = 'INVALIDATE_STOCKS';

const startStocksFetching = () => ({
  type: REQUEST_STOCKS,
});

const invalidateStocks = error => {
  return {
    type: INVALIDATE_STOCKS,
    error,
  }
}

const receiveStocks = stocks => ({
  type: RECEIVE_STOCKS,
  stocks,
});

export const requestStocks = () =>
  async dispatch => {
    dispatch(startStocksFetching());

    try {
      const stocks = await axios.get('https://poloniex.com/public?command=return24hVolume');
      return dispatch(receiveStocks(stocks.data));
    } catch (error) {
      return dispatch(invalidateStocks(error))
    }
};

