import {types} from '../actions/counter';

function createReducer(initialState, handlers) {
  return (state=initialState, action) => {
    if(!handlers.hasOwnProperty(action.type))
      return state;
    return handlers[action.type](state, action);
  }
}

export default createReducer(0, {
  [types.INCREMENT_COUNT](state, action) {
    return state + 1;
  },
  [types.DECREMENT_COUNT](state, action) {
    return state - 1;
  }
});

