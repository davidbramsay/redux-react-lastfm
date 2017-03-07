import React from 'react';
import { connect } from 'react-redux';
import * as components from './components';
import { getAndPushNewSongs, toggleSongRemoved } from './actions';


export const SongHistory = connect(
  function mapStateToProps(state) {
    return { song_history: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
      getAndPushNewSongs: () => { dispatch(getAndPushNewSongs()) },
      toggleSongRemoved: (timestamp) => { dispatch(toggleSongRemoved(timestamp)) }
    };
  }
)(components.SongList);

