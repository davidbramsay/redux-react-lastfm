import React from 'react';

export function SongItem(props) {
  const { song } = props;

  if(song.isRemoved) {
    return <strike>{song.datestring} :  {song.song} by {song.artist}, from {song.album}</strike>;
  } else {
    return (<div>
        <span className='songlist_date'> {song.datestring} : </span>
        <div className='songlist_songname'> {song.song} </div>
        by
        <div className='songlist_artist'> {song.artist} </div>
        from {song.album}
        </div>
    );
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
      <div>
      <button onClick={callLastFMClick()}> Click Here to Load</button>

      <ul className='songlist_list'>
        {song_history.map(song => (
          <li key={song.timestamp}
              className='songlist_item'
              onClick={toggleClick(song.timestamp)}>
            <SongItem song={song} />
          </li>
        ))}
      </ul>
    </div>
  );
}

