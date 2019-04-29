import React from 'react';

import SongItem from './SongItem';

const SongList = ({
  authUser,
  songs,
}) => (
  <ul>
    {songs.map(song => (
      <SongItem
        authUser={authUser}
        key={song.uid}
        song={song}
      />
    ))}
  </ul>
);

export default SongList;
