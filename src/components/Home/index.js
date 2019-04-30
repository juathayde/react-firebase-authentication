import React, {Component} from 'react';
import { compose } from 'recompose';
import '../App/App.css';
import { Button, Container, Row } from 'reactstrap';
import MusicPlayer from '../MusicPlayer/index.js'
import MusicPlayer2 from '../MusicPlayer/index.js'

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import Songs from '../Songs';

// var currentSong = ''
// const musicLocationArray = [['Would You Ever', 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a'],
// ['Bohemian Rhapsody', 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/rizkyrilos%20-%20Queen%20-%20Bohemian%20Rhapsody.mp3?alt=media&token=56ed2628-668d-4546-a657-692f4d51899e']];
//
// function handleSong(songName) {
//   var i;
//   for(i=0; i<musicLocationArray.length; ++i){
//     if(musicLocationArray[i][0]===songName){
//       currentSong = musicLocationArray[i][1];
//       //MusicPlayer.currentSong = currentSong;
//     }
//   }
// }
//
// const HomePage = () => (
//   <Container id="intro">
//     <h1>Your Music Player</h1>
//     <Row>
//         <MusicPlayer />
//         <Button color="warning">Stream Now</Button>
//     </Row>
//     <h1>Your Songs</h1>
//     <p>Upload new songs to share your music listening experience with others.</p>
//     <div onClick="handleSong('Bohemian Rapsody')">Bohemian Rhapsody</div>
//     <div onClick="handleSong('Would You Ever')">Would You Ever</div>
//       <Songs />
//   </Container>
// );
//
// const condition = authUser => !!authUser;
//
// export default compose(
//   withEmailVerification,
//   withAuthorization(condition),
// )(HomePage);
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
    //this.handleSong = this.handleSong.bind(this);
    this.handleSong1 = this.handleSong1.bind(this);
    this.handleSong2 = this.handleSong2.bind(this);
  }
  // handleSong(songName) {
  //     var i;
  //     for(i=0; i<this.state.musicLocationArray.length; ++i){
  //       if(this.state.musicLocationArray[i].songName===songName){
  //         this.setState ({
  //         currentSong: this.state.musicLocationArray[i].songLocation
  //         })
  //       }
  //     }
  //   }
  handleSong1() {
      this.setState ({
      currentSong: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/rizkyrilos%20-%20Queen%20-%20Bohemian%20Rhapsody.mp3?alt=media&token=56ed2628-668d-4546-a657-692f4d51899e'
      })
      console.log(this.state.currentSong);
      this.forceUpdate();
  }

  handleSong2() {
      this.setState ({
      currentSong: 'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a'
      })
      console.log(this.state.currentSong);
      this.forceUpdate();
  }
  onChange(newSong) {
   this.setState({ currentSong: newSong });
}
  render() {
    if (this.state.currentSong ==  'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/rizkyrilos%20-%20Queen%20-%20Bohemian%20Rhapsody.mp3?alt=media&token=56ed2628-668d-4546-a657-692f4d51899e') {
      return(
        <Container id="intro">
          <h1>Your Music Player</h1>
          <Row>
              <MusicPlayer
              currentSong={this.state.currentSong}
              onSongChange={this.onChange}
               />
              <Button color="warning">Stream Now</Button>
          </Row>
          <h1>Your Songs</h1>
          <p>Upload new songs to share your music listening experience with others.</p>
          <Button onClick={() => {this.handleSong1()}}>Bohemian Rhapsody</Button>
          <div />
          <Button onClick={() => {this.handleSong2()}}>Would You Ever</Button>
              <Songs />
        </Container>
    )
    }
    if (this.state.currentSong ==  'https://firebasestorage.googleapis.com/v0/b/reverb-9081f.appspot.com/o/Skrillex%20%26%20Poo%20Bear%20-%20Would%20You%20Ever.mp3?alt=media&token=1de62308-3d33-44cc-95aa-443ff5953d2a') {
      return(
        <Container id="intro">
          <h1>Your Music Player</h1>
          <Row>
              <MusicPlayer
              currentSong={this.state.currentSong}
              onSongChange={this.onChange}
               />
              <Button color="warning">Stream Now</Button>
          </Row>
          <h1>Your Songs</h1>
          <p>Upload new songs to share your music listening experience with others.</p>
          // <Button onClick={() => {this.handleSong1()}}>Bohemian Rhapsody</Button>
          // <div />
          // <Button onClick={() => {this.handleSong2()}}>Would You Ever</Button>
              <Songs />
        </Container>
    )
    }
  }
  }



const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
