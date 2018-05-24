import React, {Component} from 'react';

class Home extends Component {
  componentWillMount() {
    this.props.requestStocks();
  }

  handleClick = stock => event => {
    event.preventDefault();
    console.log(stock);
    this.props.push(`/${stock}`);
  }

  render() {
    const props = this.props;
    const { stocks } = this.props;
    console.log(props.stocks);
    return (<div>
    <h1>Home</h1>
    {Object.keys(stocks).map(stock =>
      <button key={stock} onClick={this.handleClick(stock)}>{stock}</button>
    )}
    </div>
  );
  }
}

export default Home;