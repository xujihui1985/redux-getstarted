import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import thunk from 'redux-thunk';

const logger = ({getState, dispatch}) => {
  return next => action => {
    console.group(action.type);
    console.log('current state', getState());
    let result = next(action);
    console.log('next state', getState());
    console.groupEnd();
    return result;
  };
}

const createStoreWithLogger = applyMiddleware(logger, thunk)(createStore);

const store = createStoreWithLogger(reducer, {
  counter: 20
});

export default store;

