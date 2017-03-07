import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducer';
import { SongHistory } from './containers';

console.log(SongHistory);
console.log(typeof(SongHistory));

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <SongHistory />
  </Provider>,
  document.getElementById('app')
);

