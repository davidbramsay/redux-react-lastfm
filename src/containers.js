import React from 'react';
import { connect } from 'react-redux';
import * as components from './components';
import { getAndPushSongs, toggleSongRemoved } from './actions';


export const SongHistory = connect(
  function mapStateToProps(state) {
    return { song_history: state.songlist };
  },
  function mapDispatchToProps(dispatch) {
    return {
      getAndPushNewSongs: () => { dispatch(getAndPushSongs()) },
      toggleSongRemoved: (timestamp) => { dispatch(toggleSongRemoved(timestamp)) }
    };
  }
)(components.SongList);

