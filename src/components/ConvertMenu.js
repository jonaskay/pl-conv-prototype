import React from 'react';
import './ConvertMenu.css';
import ConvertMenuField from './ConvertMenuField';

class ConvertMenu extends React.Component {
  getSpotifyAuthorizeUrl() {
    let url = 'https://accounts.spotify.com/authorize?'; 
    url += 'client_id=' + process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    url += '&redirect_uri=' + process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
    url += '&scope=playlist-modify-private&response_type=token';
    return url
  }

  handleSpotifyButtonClick = () => {
    window.location = this.getSpotifyAuthorizeUrl();
  }

  render() {
    return (
      <div className="ConvertMenu">
        <div className="ConvertMenu-header">Settings</div>
        <div className="ConvertMenu-body">
          <div style={{color: 'rgba(255,255,255,.7)'}}>Convert playlist to:</div>
          <ConvertMenuField 
            name="Spotify" 
            authenticated={this.props.spotifyAuthenticated}
            checked={this.props.convertToSpotify}
            onInputClick={this.props.onSpotifyToggle}
            onButtonClick={this.handleSpotifyButtonClick} />
          <ConvertMenuField name="YouTube" authDisabled={true} />
        </div>
      </div>
    );
  }
}

export default ConvertMenu;
