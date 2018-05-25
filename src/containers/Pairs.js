import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestStocks
} from '../actions';

import Pairs from '../components/Pairs'



const mapStateToProps = state => ({
  stocks: state.stocks.stocks,
  isFetchingStocks: state.stocks.isFetchingStocks,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestStocks,
      push
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Pairs);
