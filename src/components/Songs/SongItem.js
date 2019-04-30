import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SongItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authUser, song } = this.props;

    return (
      <li> (
        <span>
            <strong>{song.userId}</strong><p>{song.fileName}</p>
          </span>
        )}
      </li>
    );
  }
}

export default SongItem;
