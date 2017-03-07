import { List, Map } from 'immutable';

const init = List([]);

export function reducer(song_history=init, action) {
  switch(action.type) {
    case 'PUSH_ONE_SONG':
      return [...song_history, action.songlist];
    case 'PUSH_NEW_SONGS':
      return [...song_history,
              ...action.songlist];
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
