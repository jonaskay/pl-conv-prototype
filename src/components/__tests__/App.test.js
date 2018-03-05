import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';
import fileData from '../../tracks.json';

it('renders the app', () => {
  const component = ReactTestRenderer.create(<App fileName="foobar" />);
  expect(component).toMatchSnapshot();
});
