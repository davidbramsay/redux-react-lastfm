import { getListeningHistory } from '../lastfm_hack/lastfmlib';
import reducer from './reducer';

const uid = () => Math.random().toString(34).slice(2);


export function pushSongs(songs=[]) {

  for (let i =0; i<songs.length; i++){
    songs[i]['isRemoved'] = false;
  }

  return {
    type: 'PUSH_NEW_SONGS',
    songlist: songs
    };
}


export function getAndPushNewSongs(timestamp=0){
    console.log('get and push songs called!');


    const getMostRecentTimestamp = (songs) => { //get largest timestamp + 1

        if (songs.length > 0){
            return Math.max.apply(Math,songs.map(song => {return s.timestamp;})) + 1;
        }

        return 0;
    };

    return (dispatch, getState) => {

        console.log('this function');
        console.log(getState());
        const songlist = getState();
        timestamp = getMostRecentTimestamp(songlist);

        console.log(timestamp);

        getListeningHistory('drmsy', timestamp, function(songs){
            console.log('dispatching!');
            dispatch(pushSongs(songs));
        });
    }

}


export function toggleSongRemoved(timestamp) {
  return {
    type: 'TOGGLE_SONG_REMOVE',
    timestamp: timestamp
  };
}

