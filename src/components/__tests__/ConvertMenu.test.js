import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ConvertMenu from '../ConvertMenu';

it('renders a menu', () => {
  const component = ReactTestRenderer.create(<ConvertMenu />);
  expect(component).toMatchSnapshot();
});
