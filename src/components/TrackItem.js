import React from 'react';

class TrackItem extends React.Component {
  render() {
    if (!this.props.resource_id) {
      return null;
    }

    const iframe = (() => {
      switch (this.props.service) {
        case 'spotify':
          return (
            <iframe
              src={'https://open.spotify.com/embed?uri=spotify:track:' + this.props.resource_id}
              width="288"
              height="80"
              frameBorder="0"
              title="Spotify Play Button"></iframe>
          );
        case 'youtube':
          return (
            <iframe
              src={'https://www.youtube.com/embed/' + this.props.resource_id + '?controls=0&amp;showinfo=0'}
              width="288"
              height="162"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
               title="YouTube Player"></iframe>
          );
        default: return <div></div>;
      }
    })();

    return (
      <div style={{marginBottom: '1rem'}}>{iframe}</div>
    );
  }
}

export default TrackItem;
