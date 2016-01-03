import React, {Component} from 'react';

export default ({
  counter, 
  increment, 
  decrement, 
  incrementAsync
}) => (
      <p>
        clicked: {counter} times
        {' '}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={incrementAsync}>incrementAsync</button>
      </p>
);


