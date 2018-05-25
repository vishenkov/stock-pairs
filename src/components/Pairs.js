import React, {Component} from 'react';
import Pair from './Pair';
import Progress from './Progress';

class Home extends Component {
  componentWillMount() {
    this.props.requestStocks();
  }

  render() {

    const { stocks, isFetchingStocks } = this.props;

    return (
    <div>
      {isFetchingStocks
        ? <Progress />
        : <div className="list-group">
            <li className="list-group-item active">Pairs</li>
            {Object.keys(stocks).map(stock =>
              !stock.startsWith('total') && <Pair
                key={stock}
                stock={stock}
                rates={stocks[stock]}
              />
            )}
          </div>
      }
    </div>
  );
  }
}

export default Home;