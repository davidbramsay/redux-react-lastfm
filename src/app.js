import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { songlist, settings } from './reducer';
import { SongHistory } from './containers';
import { Settings } from './settings_containers';


const store = createStore(combineReducers({songlist,settings}), applyMiddleware(thunk));

const MainWrapper = React.createClass({
    render (){
        return(
            <div>
            <Settings />
            <SongHistory />
            </div>
        )
    }
});

render(
  <Provider store={store}>
    <MainWrapper />
  </Provider>,
  document.getElementById('app')
);

