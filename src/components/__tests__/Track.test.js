import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Track from '../Track';

it('renders a track', () => {
  const track = { 
    "id": 1,
    "name": "Bodak Yellow", 
    "artist": "Cardi B",
    "image": "https://i.scdn.co/image/c6f9f7b2e71ae63388ec99bcc658eb173ed97bcc",
    "spotify_id": "2771LMNxwf62FTAdpJMQfM",
    "youtube_id": "PEGccV-NOm8"
  }
  const component = ReactTestRenderer.create(<Track track={track} />);
  expect(component).toMatchSnapshot();
});
