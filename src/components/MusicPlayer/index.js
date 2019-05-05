import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MusicPlayer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        console.log('Setting state');
        return { unseen: "does not display"}
      });
    }, 1000);
  }

  render() {
    console.log("The prop is", this.props.currentSong);
    console.log("Render called");
    return (
        <audio id="music-player" controls ref="audio">
          <source src={this.props.currentSong} />
        </audio>
      );
  }
}

MusicPlayer.propTypes = {
  currentSong: PropTypes.string,
}
export default MusicPlayer
