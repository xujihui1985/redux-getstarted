import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import {
  increment,
  decrement,
  incrementAsync
} from '../actions/counter';

function mapStateToProps(state, propsOfContainerComponent) {
  console.log(propsOfContainerComponent);
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({increment,decrement,incrementAsync}, dispatch);
// bindActionCreators did samething as below
//
//function mapDispatchToProps(dispatch) {
  //return {
    //increment() {
      //dispatch(increment());
    //},
    //decrement() {
      //dispatch(decrement());
    //},
    //incrementAsync() {
      //dispatch(incrementAsync());
    //}
  //}
//}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

