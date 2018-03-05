import React from 'react';
import './Track.css';
import TrackItem from './TrackItem';

class Track extends React.Component {  
  render() {
    const track = this.props.track;

    return (
      <div className="Track">
        <div 
          className="Track-backdrop" 
          style={{backgroundImage: 'url(' + track.image + ')'}}></div>
        <div className="Track-content">
          <div style={{marginBottom: '1.25rem'}}>
            <img
              src={track.image} 
              alt={[track.name, track.artist].join(' - ')} 
              className="Track-img" />
            <div style={{fontSize: '1.125rem', marginBottom: '.25rem'}}>{track.name}</div>
            <div>{track.artist}</div>
          </div>
          <TrackItem service="spotify" resource_id={track.spotify_id} />
          <TrackItem service="youtube" resource_id={track.youtube_id} />
        </div>
      </div>
    );
  }
}

export default Track;
