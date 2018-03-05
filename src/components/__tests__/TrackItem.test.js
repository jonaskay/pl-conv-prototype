import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import TrackItem from '../TrackItem';

it('renders a Spotify player', () => {
  const component = ReactTestRenderer.create(<TrackItem service="spotify" resource_id="foobar"  />);
  expect(component).toMatchSnapshot();
});

it('renders a YouTube player', () => {
  const component = ReactTestRenderer.create(<TrackItem service="youtube" resource_id="foobar" />);
  expect(component).toMatchSnapshot();
});

it('renders nothing when resource id is missing', () => {
  const component = ReactTestRenderer.create(<TrackItem service="youtube" resource_id="" />);
  expect(component).toMatchSnapshot();
});
