import React from 'react';
import SongItem from './SongItem';

const SongList = ({
  authUser,
  songs
}) => (
  <ul>
    {songs.map(song => (
      <SongItem
        authUser={authUser}
        key={song.uid}
        name={song.fileName}
      />
    ))}
  </ul>
);

export default SongList;
