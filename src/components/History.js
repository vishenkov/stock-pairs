import React, {Component} from 'react';

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
    const { history } = this.props;
    console.log(history);
    return (<div>
    <h1>History</h1>
    {/* {Object.keys(stocks).map(stock =>
      <button key={stock} onClick={this.handleClick(stock)}>{stock}</button>
    )} */}
    </div>
  );
  }
}

export default History;