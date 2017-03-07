import { List, Map } from 'immutable';
import update from 'react-addons-update';

const song_init = List([]);

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

const settings_init = {'lastfm': {'username': ''}, 'payments': {'amount':0, 'enabled':true}}

export function settings( settings=settings_init, action) {
    switch (action.type){
        case 'UPDATE_LASTFM_USERNAME':
            return update(settings, {lastfm: { username : {$set: action.username} }});
        case 'UPDATE_PAYMENT_AMOUNT':
            return update(settings, {payments: { amount : {$set: action.amount} }});
        case 'TOGGLE_PAYMENT_ENABLED':
            return update(settings, {payments: { enabled : {$set: !settings.payments.enabled} }});
        default:
            return settings;
    }
}
