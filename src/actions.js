import { getListeningHistory } from '../lastfm_hack/lastfmlib';

//---------------------------------------------------------------
//--------------  ACTIONS FOR SONGS --------------------------

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
            return Math.max.apply(Math,songs.map(song => {return song.timestamp;})) + 1;
        }

        return 0;
    };

    return (dispatch, getState) => {


        const stateVar = getState();
        let timestamp = getMostRecentTimestamp(stateVar.songlist);
        let username = stateVar.settings.lastfm.username;

        console.log('thunk, uname: ' + username + ' timestamp: ' + timestamp);

        getListeningHistory(username, timestamp, function(songs){
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


//---------------------------------------------------------------
//--------------  ACTIONS FOR SETTINGS --------------------------

export function updateLastFMUsername(name){
  console.log('called update username with name ' + name);

  return {
    type: 'UPDATE_LASTFM_USERNAME',
    username: name
    };
}

export function updatePaymentAmount(amount=0){
  return {
    type: 'UPDATE_PAYMENT_AMOUNT',
    amount: amount
    };
}

export function togglePaymentEnabled(){
  return {
    type: 'TOGGLE_PAYMENT_ENABLED',
    username: name
    };
}
