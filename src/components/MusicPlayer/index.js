import React, { Component } from 'react';
import { Progress, Container, Row } from 'reactstrap';

class MusicPlayer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
      currentSong: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a',
    }
    this.url = this.state.currentSong;
    this.audio = new Audio(this.url);
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }

  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }


  // setURL = (url) => {
  //   this.setState({ url: url })
  // }

  render() {

  return (
      <audio controls>
        <source src='https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a' />
      </audio>
    );
  }
}

export default MusicPlayer;
