import React, {Component} from 'react';
import { compose } from 'recompose';
import '../App/App.css';
import { Button, Container, Row } from 'reactstrap';
import MusicPlayer from '../MusicPlayer/index.js'

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/rizkyrilos%20-%20Queen%20-%20Bohemian%20Rhapsody.mp3?alt=media&token=56ed2628-668d-4546-a657-692f4d51899e',
      musicLocationArray: [
        {
          songName:'Would You Ever',
          songLocation: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a'
        },
        {
          songName:'Bohemian Rhapsody',
          songLocation: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/rizkyrilos%20-%20Queen%20-%20Bohemian%20Rhapsody.mp3?alt=media&token=56ed2628-668d-4546-a657-692f4d51899e'
        }
      ],
      currentTime: null
    };
    // this.handleSong1 = this.handleSong1.bind(this);
    // this.handleSong2 = this.handleSong2.bind(this);
  }


 // handleSong1() {
 //      this.setState ({
 //      currentSong: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/rizkyrilos%20-%20Queen%20-%20Bohemian%20Rhapsody.mp3?alt=media&token=56ed2628-668d-4546-a657-692f4d51899e'
 //    }, function(){
 //        this.refs.audio.pause();
 //        this.refs.audio.load();
 //    })
 //      console.log(this.state.currentSong);
 //  }
 //
 //  handleSong2() {
 //      this.setState ({
 //      currentSong: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a'
 //    }, function(){
 //        this.refs.audio.pause();
 //        this.refs.audio.load();
 //    }
 //  )
 //
 //      console.log(this.state.currentSong);
 //  }

  render() {
    return(

        <Container id="intro">
          <h1>Your Music Player</h1>
          <MusicPlayer />
          <Messages />
        </Container>
      )
    }

  }

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
