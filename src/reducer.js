import { List, Map } from 'immutable';
import update from 'react-addons-update';

const song_init = List([]);
//expect array elements to be dictionaries with {datestring,
//timestamp, artist, mbid, album, song, image, isRemoved}

export function songlist(song_history=song_init, action) {
  switch(action.type) {
    case 'PUSH_ONE_SONG':
      return [...song_history, action.songlist];
    case 'PUSH_NEW_SONGS':
      return [...action.songlist,
              ...song_history];
    case 'REPLACE_SONGS':
      return action.songlist;
    case 'TOGGLE_SONG_REMOVE':
      return song_history.map(song => {
        if(song.timestamp === action.timestamp) {
          return Object.assign({}, song, {isRemoved: !song.isRemoved});
        } else {
          return song;
        }
      });
    default:
      return song_history;
  }
}

const settings_init = {
    'lastfm': {
        'username': 'drmsy'
    },
    'payments': {
        'amount':0.00,
        'enabled':true,
        'term':'THIS_MONTH',
        'min_payment': 0.01,
        'artists_off': List([])
    }
}

export function settings( settings=settings_init, action) {
    switch (action.type){
        case 'UPDATE_LASTFM_USERNAME':
            return update(settings, {lastfm: { username : {$set: action.username} }});
        case 'UPDATE_PAYMENT_AMOUNT':
            return update(settings, {payments: { amount : {$set: action.amount} }});
        case 'TOGGLE_PAYMENT_ENABLED':
            return update(settings, {payments: { enabled : {$set: !settings.payments.enabled} }});
        case 'UPDATE_PAYMENT_TERM':
            return update(settings, {payments: { term : {$set: action.term} }});
        case 'UPDATE_MIN_PAYMENT':
            return update(settings, {payments: { min_payment : {$set: action.min_payment} }});
        case 'ARTIST_PAYMENT_OFF':
            return update(settings, {payments: { artists_off: {$set: settings.payments.artists_off.filter(e => e != action.mbid)} }});
        case 'ARTIST_PAYMENT_ON':
            return update(settings, {payments: { artists_off: {$set: [...settings.payments.artists_off, action.mbid]} }});
        default:
            return settings;
    }
}

const payhistory_init = List([]);
//expect array elements to be dictionaries with { 'timestamp': 123214,
//'payment_term': 'ALL_TIME', 'visible': true, 'total_payment': 5.00,
//'total_plays': 34,
//payments:[{artist, mbid, image, numplays, payment}, {...}, {...}] }

export function payhistory( pay_history=payhistory_init, action) {
  switch(action.type) {
    case 'ADD_NEW_PAYMENT':
      return [action.payment,
              ...pay_history];
    case 'DELETE_PAY_HISTORY':
      return payhistory_init;
    default:
      return pay_history;
  }
}
