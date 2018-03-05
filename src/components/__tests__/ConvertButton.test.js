import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ConvertButton from '../ConvertButton';

it('renders a button', () => {
  const component = ReactTestRenderer.create(<ConvertButton />);
  expect(component).toMatchSnapshot();
});
