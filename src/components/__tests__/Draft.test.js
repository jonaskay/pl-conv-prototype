import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Draft from '../Draft';

const item = { 
  "id": 1,
  "name": "Bodak Yellow", 
  "artist": "Cardi B",
  "image": "https://i.scdn.co/image/c6f9f7b2e71ae63388ec99bcc658eb173ed97bcc",
  "spotify_id": "2771LMNxwf62FTAdpJMQfM",
  "youtube_id": "PEGccV-NOm8"
}

it('renders a playlist draft', () => {
  const component = ReactTestRenderer.create(<Draft items={[item]} />);
  expect(component).toMatchSnapshot();
});
