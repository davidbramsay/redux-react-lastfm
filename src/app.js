import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { songlist, settings } from './reducer';
import { SongHistory } from './containers';


const store = createStore(combineReducers({songlist,settings}), applyMiddleware(thunk));


render(
  <Provider store={store}>
    <SongHistory />
  </Provider>,
  document.getElementById('app')
);

