import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import DraftItem from '../DraftItem';

const item = { 
  "id": 1,
  "name": "Bodak Yellow", 
  "artist": "Cardi B",
  "image": "https://i.scdn.co/image/c6f9f7b2e71ae63388ec99bcc658eb173ed97bcc",
  "spotify_id": "2771LMNxwf62FTAdpJMQfM",
  "youtube_id": "PEGccV-NOm8"
}

it('renders a draft item', () => {
  const component = ReactTestRenderer.create(<DraftItem item={item} />);
  expect(component).toMatchSnapshot();
});

it('renders a selected draft item', () => {
  const component = ReactTestRenderer.create(<DraftItem item={item} selected={true} />);
  expect(component).toMatchSnapshot();
});
