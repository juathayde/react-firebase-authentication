import React, { Component } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import SongList from './SongList';

class Songs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: '',
      loading: false,
      songs: [],
      limit: 5,
    };
  }

  componentDidMount() {
    this.uploadFile();
  }

  uploadFile() {
    console.log("this function was called")
    this.setState({ loading: true});
  }

  // onListenForSongs = () => {
  //   this.setState({ loading: true });
  //
  //   this.props.firebase
  //     .songs()
  //     .orderByChild('createdAt')
  //     .limitToLast(this.state.limit)
  //     .on('value', snapshot => {
  //       const songObject = snapshot.val();
  //
  //       if (songObject) {
  //         const songList = Object.keys(songObject).map(key => ({
  //           ...songObject[key],
  //           uid: key,
  //         }));
  //
  //         this.setState({
  //           songs: songList,
  //           loading: false,
  //         });
  //       } else {
  //         this.setState({ songs: null, loading: false });
  //       }
  //     });
  // };
  //
  // componentWillUnmount() {
  //   this.props.firebase.songs().off();
  // }
  //
  // onChangeSong = event => {
  //   this.setState({ file: event.target.value });
  // };
  //
  // onCreateSong = (event, authUser) => {
  //   this.props.firebase.songs().push({
  //     file: this.state.file,
  //     userId: authUser.uid,
  //     createdAt: this.props.firebase.serverValue.TIMESTAMP,
  //   });
  //
  //   this.setState({ file: '' });
  //
  //   event.preventDefault();
  // };
  //
  // onNextPage = () => {
  //   this.setState(
  //     state => ({ limit: state.limit + 5 }),
  //     this.onListenForSongs,
  //   );
  // };

  render() {
    const { file, songs, loading} = this.state;

    return (
      <AuthUserContext.Consumer>
        {authUser => (
          <div>
            {!loading && songs && (
              <Button color="warning" onClick={this.onNextPage}>
                More
              </Button>
            )}

            {loading && <div>Loading ...</div>}

            {songs && (
              <SongList
                authUser={authUser.username}
                songs={songs}
              />
            )}

            {!songs && <div>There are no songs...</div>}

            <FormGroup
              onSubmit={event =>
                this.onCreateSong(event, authUser)
              }
            >
              <Input
                type="file"
                value={file}
                onChange={this.onChangeSong}
              />
              <Button type="submit" color="warning">Submit</Button>
            </FormGroup>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }

}

export default withFirebase(Songs);
