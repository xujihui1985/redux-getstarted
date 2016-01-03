'use strict';
import fetch from 'isomorphic-fetch';

export const types = {
  INCREMENT_COUNT: 'INCREMENT_COUNT',
  DECREMENT_COUNT: 'DECREMENT_COUNT',
  INCREMENTING: 'INCREMENTING',
  RECEIVE: 'RECEIVE',
};

export function increment() {
  return {
    type: types.INCREMENT_COUNT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT_COUNT
  };
}

export function receiveData(json) {
  console.log(json);
  return {
    type: types.RECEIVE
  };
}

export function incrementAsync() {
  return (dispatch, getState) => {
    dispatch({
      type: types.INCREMENTING
    });
    return fetch(`http://localhost:3000/api/data`)
    .then(response => response.json())
    .then(json => dispatch(receiveData(json)));
  }
}

