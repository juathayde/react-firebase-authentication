import React, { Component } from 'react';
import './MusicPlayer.css';
import { Progress, Container, Row } from 'reactstrap';

class MusicPlayer extends Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    this.url = "http://streaming.tdiradio.com:8000/house.mp3";
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

  render() {

  return (
      <div className="MusicPlayer">
      <Container>
        <Row>
          <button class="play-button" onClick={this.play}></button>
          <button class='pause-button' onClick={this.pause}>f</button>
        </Row>
      </Container>
      </div>

    );
  }
}

export default MusicPlayer;
