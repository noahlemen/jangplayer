import React, { Component } from 'react';
import './App.css';

import Player from './Player.js';
import Playlist from './Playlist.js';

import file1 from './songs/1.mp3';
import file2 from './songs/2.mp3';
import file3 from './songs/3.mp3';
import file4 from './songs/4.mp3';

class App extends Component {
  state = {
    playlist: [
      {
        path: file1
      },
      {
        title: 'a good song',
        path: file2
      },
      {
        title: 'this song is ok',
        path: file3
      },
      {
        title: 'this song stinks',
        path: file4
      }
    ],
    indexOfCurrentSong: 0
  };

  switchToPreviousSong = () => {
    const { indexOfCurrentSong } = this.state;

    if (indexOfCurrentSong !== 0) {
      this.setState({ indexOfCurrentSong: indexOfCurrentSong - 1 });
    }
  };

  switchToNextSong = () => {
    const { playlist, indexOfCurrentSong } = this.state;

    if (indexOfCurrentSong < playlist.length - 1) {
      this.setState({ indexOfCurrentSong: indexOfCurrentSong + 1 });
    }
  };

  handlePlaylistChange = (newPlaylist) => {
    this.setState({ playlist: newPlaylist });
  }

  render() {
    const { playlist, indexOfCurrentSong } = this.state;

    const prevDisabled = indexOfCurrentSong === 0;
    const nextDisabled = indexOfCurrentSong === playlist.length - 1;

    return (
      <div className="App">
        <Playlist playlist={playlist} onChange={this.handlePlaylistChange} />
        <Player song={playlist[indexOfCurrentSong]} />
        <button onClick={this.switchToPreviousSong} disabled={prevDisabled}>previous</button>
        <button onClick={this.switchToNextSong} disabled={nextDisabled}>next</button>
      </div>
    );
  }
}

export default App;
