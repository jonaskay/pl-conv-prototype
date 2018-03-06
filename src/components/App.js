import React, { Component } from 'react';
import './App.css';
import Draft from './Draft';
import ConvertMenu from './ConvertMenu';
import ConvertButton from './ConvertButton';
import Modal from './Modal';
import FileForm from './FileForm';

class App extends Component {
  constructor(props) {
    super(props);

    let accessToken = this.getAccessTokenFromHash(window.location.hash);
    if (accessToken) {
      this.state = {
        convertToSpotify: true,
        fileData: this.props.demoData, 
        playlistName: this.props.demoName,
        spotifyAccessToken: accessToken
      }
    } else {
      this.state = {
        convertToSpotify: false,
        fileData: null, 
        playlistName: '',
        spotifyAccessToken: accessToken
      }
    }
  }

  getAccessTokenFromHash(hash) {
    return hash.split('&')[0].split('=')[1] || '';
  }

  handleFileSubmit = (e) => {
    e.preventDefault();

    this.setState({fileData: this.props.demoData, playlistName: this.props.demoName});
  }
  
  handleNameChange = (e) => {
    this.setState({playlistName: e.target.value});
  }

  handleSpotifyToggle = () => {
    this.setState({convertToSpotify: !this.state.convertToSpotify});
  }

  render() {
    return (
      <div className="App">
        {!this.state.fileData && 
          <Modal>
            <FileForm fileName={this.props.demoName} onSubmit={this.handleFileSubmit} />
          </Modal>
        }
        <div className="App-col1">
          <Draft 
            items={this.state.fileData} 
            name={this.state.playlistName} 
            onNameChange={this.handleNameChange} />
        </div>
        <div className="App-col2">
          <ConvertMenu 
            convertToSpotify={this.state.convertToSpotify}
            spotifyAuthenticated={this.state.spotifyAccessToken}
            onSpotifyToggle={this.handleSpotifyToggle} />
          <ConvertButton />
        </div>
      </div>
    );
  }
}

export default App;
