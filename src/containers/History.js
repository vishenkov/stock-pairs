import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestStockHistory
} from '../actions';

import History from '../components/History'



const mapStateToProps = state => ({
  history: state.history.history,
  isFetchingHistory: state.history.isFetchingHistory,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestStockHistory,
      push
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(History);
