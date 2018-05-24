import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestStocks
} from '../actions';

import Home from '../components/Home'



const mapStateToProps = state => ({
  stocks: state.stocks.stocks,
  isFetchingStocks: state.stocks.isFetchingStocks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestStocks,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
