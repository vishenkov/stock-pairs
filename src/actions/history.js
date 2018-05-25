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

const fake = [{"globalTradeID":2036467,"tradeID":21387,"date":"2014-09-12 05:21:26","type":"buy","rate":"0.00008943","amount":"1.27241180","total":"0.00011379"},{"globalTradeID":2036466,"tradeID":21386,"date":"2014-09-12 05:21:26","type":"buy","rate":"0.00008943","amount":"1.27241180","total":"0.00011379"},{"globalTradeID":2036465,"tradeID":21385,"date":"2014-09-12 05:21:26","type":"buy","rate":"0.00008943","amount":"238.28433663","total":"0.02130976"},{"globalTradeID":2036464,"tradeID":21384,"date":"2014-09-12 05:21:26","type":"buy","rate":"0.00008937","amount":"237.24284436","total":"0.02120239"},{"globalTradeID":2036463,"tradeID":21383,"date":"2014-09-12 05:21:26","type":"buy","rate":"0.00008937","amount":"222.40780368","total":"0.01987658"},{"globalTradeID":2036462,"tradeID":21382,"date":"2014-09-12 05:20:50","type":"sell","rate":"0.00008937","amount":"222.40777437","total":"0.01987658"},{"globalTradeID":2036461,"tradeID":21380,"date":"2014-09-12 05:20:48","type":"sell","rate":"0.00008937","amount":"15.87653295","total":"0.00141888"},{"globalTradeID":2036460,"tradeID":21378,"date":"2014-09-12 05:20:45","type":"sell","rate":"0.00008937","amount":"1409.86957705","total":"0.12600004"},{"globalTradeID":2036459,"tradeID":21377,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008937","amount":"100.00000000","total":"0.00893700"},{"globalTradeID":2036458,"tradeID":21376,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008936","amount":"2.00000000","total":"0.00017872"},{"globalTradeID":2036457,"tradeID":21375,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008930","amount":"592.90881062","total":"0.05294675"},{"globalTradeID":2036456,"tradeID":21374,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008900","amount":"34.45002070","total":"0.00306605"},{"globalTradeID":2036455,"tradeID":21373,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008900","amount":"100.00000000","total":"0.00890000"},{"globalTradeID":2036454,"tradeID":21372,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008900","amount":"71.28118327","total":"0.00634402"},{"globalTradeID":2036453,"tradeID":21371,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008900","amount":"10.00000000","total":"0.00089000"},{"globalTradeID":2036452,"tradeID":21370,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008850","amount":"468.00000000","total":"0.04141800"},{"globalTradeID":2036451,"tradeID":21369,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008830","amount":"1000.00000000","total":"0.08830000"},{"globalTradeID":2036450,"tradeID":21368,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008828","amount":"24.76164861","total":"0.00218595"},{"globalTradeID":2036449,"tradeID":21367,"date":"2014-09-12 05:20:45","type":"buy","rate":"0.00008796","amount":"2332.07990187","total":"0.20512974"}];

export const requestStockHistory = stock =>
  async dispatch => {
    dispatch(startHistoryFetching());

    try {
      const endDate = Math.floor(Date.now() / 1000);
      const startDate = endDate - 24 * 60 * 60;
      // const history = await axios.get(`https://poloniex.com/public?command=returnTradeHistory&currencyPair=${stock}&start=${startDate}&end=${endDate}`);
      // return dispatch(receiveHistory(history.data));
      return dispatch(receiveHistory(fake));
    } catch (error) {
      return dispatch(invalidateHistory(error))
    }
};