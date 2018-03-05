import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import TrackItem from '../TrackItem';

it('renders a Spotify player', () => {
  const component = ReactTestRenderer.create(<TrackItem service="spotify" />);
  expect(component).toMatchSnapshot();
});

it('renders a YouTube player', () => {
  const component = ReactTestRenderer.create(<TrackItem service="youtube" />);
  expect(component).toMatchSnapshot();
});
