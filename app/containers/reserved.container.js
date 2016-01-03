import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReservedComponent from '../components/reserved.component';
import * as ReservedActions from '../actions/reserved.actions';

function mapStateToProps(state) {	
  return {
    reserved: state.reserved
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReservedActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReservedComponent);
