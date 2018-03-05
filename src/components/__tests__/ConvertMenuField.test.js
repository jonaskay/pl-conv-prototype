import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ConvertMenuField from '../ConvertMenuField';

it('renders a field', () => {
  const component = ReactTestRenderer.create(<ConvertMenuField name="Foobar" />);
  expect(component).toMatchSnapshot();
});
