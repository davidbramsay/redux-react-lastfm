import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { songlist, settings, payhistory } from './reducer';
import { SongHistory } from './containers';
import { PaymentHistory } from './paymenthistory_container';
import { Settings } from './settings_containers';
import { ArtistPayment } from './artistpay_container';


const store = createStore(combineReducers({songlist,settings, payhistory}), applyMiddleware(thunk));

const MainWrapper = React.createClass({
    render (){
        return(
            <div>
            <Settings />
            <PaymentHistory />
            <ArtistPayment />
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

