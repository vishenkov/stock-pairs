import React, {Component} from 'react';
import HistoryItem from './HistoryItem';
import Progress from './Progress';

class History extends Component {
  componentWillMount() {
    console.log(this.props);
    const { stock } = this.props.match.params;
    this.props.requestStockHistory(stock);
  }

  handleClick = stock => event => {
    event.preventDefault();
    console.log(stock);
    this.props.push(`/${stock}`);
  }

  render() {
    const { history, isFetchingHistory } = this.props;
    const { stock } = this.props.match.params;
    console.log(isFetchingHistory);
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h2 className="lead">{stock} 24 hours history</h2>
          {isFetchingHistory
            ? <Progress />
            :  <table className="table table-sm">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map(stock =>
                    <HistoryItem
                      key={stock.globalTradeID}
                      data={stock}
                    />
                  )}
                </tbody>
              </table>
          }
        </div>
    </div>
  );
  }
}

export default History;