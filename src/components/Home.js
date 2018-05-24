import React, {Component} from 'react';

class Home extends Component {
  componentWillMount() {
    this.props.requestStocks();
  }

  render() {
    const props = this.props;
    console.log(props.stocks);
    return (<div>
    <h1>Home</h1>
    </div>
  );
  }
}

export default Home;