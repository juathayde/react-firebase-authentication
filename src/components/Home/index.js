import React from 'react';
import { compose } from 'recompose';
import '../App/App.css';
import { Button, Container } from 'reactstrap';
import MusicPlayer from '../MusicPlayer/index.js'

import { withAuthorization, withEmailVerification } from '../Session';
import Messages from '../Messages';
import Songs from '../Songs';

const HomePage = () => (
  <Container id="intro">
    <h1>Your Music Player</h1>
      <MusicPlayer />
      <Button color="warning">Stream</Button>
    <h1>Your Songs</h1>
    <p>Upload new songs to share your music listening experience with others.</p>
      <Songs />
    <h1>Your Messages</h1>
      <Messages />
  </Container>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
