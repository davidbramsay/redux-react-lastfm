import React from 'react';


export function SongItem(props) {
  const { song } = props;

  if(song.isRemoved) {
    return <strike>{song.datestring} :  {song.song} by {song.artist}, from {song.album}</strike>;
  } else {
    return <span>{song.datestring} :  {song.song} by {song.artist}, from {song.album}</span>;
  }
}


export function SongList(props) {
  const { song_history, getAndPushNewSongs, toggleSongRemoved } = props;

  const callLastFMClick = () => event => {
      console.log('click');
      getAndPushNewSongs();
  };

  const toggleClick = (timestamp) => event => toggleSongRemoved(timestamp);

  return (
    <div className='todo'>
      <button onClick={callLastFMClick()}> Click Here to Load</button>
      <ul className='todo__list'>
        {song_history.map(song => (
          <li key={song.timestamp}
              className='todo__item'
              onClick={toggleClick(song.timestamp)}>
            <SongItem song={song} />
          </li>
        ))}
      </ul>
    </div>
  );
}

