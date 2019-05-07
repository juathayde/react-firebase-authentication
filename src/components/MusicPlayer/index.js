import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row } from 'reactstrap';

function changeSong(song) {
  document.getElementById("music-player").pause();
  document.getElementById("music-player").setAttribute('src', song);
  document.getElementById("music-player").load();
  document.getElementById("music-player").play();
}

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
      <Container>
      <Row>
          <audio id="music-player" controls>
            <source src="https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/rizkyrilos%20-%20Queen%20-%20Bohemian%20Rhapsody.mp3?alt=media&token=56ed2628-668d-4546-a657-692f4d51899e"/>
          </audio>
          <Button color="warning">Stream Now</Button>
      </Row>
      <br />
      <br />
      <Button onClick={() => {
        changeSong('https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/rizkyrilos%20-%20Queen%20-%20Bohemian%20Rhapsody.mp3?alt=media&token=56ed2628-668d-4546-a657-692f4d51899e')
      }}>Bohemian Rhapsody</Button>
      <div />
      <Button onClick={()=> {
        changeSong('https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a')
      }}>Would You Ever</Button>
      </Container>
      );
  }
}

MusicPlayer.propTypes = {
  currentSong: PropTypes.string,
}
export default MusicPlayer
