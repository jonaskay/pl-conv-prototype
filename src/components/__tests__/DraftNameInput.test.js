import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import DraftNameInput from '../DraftNameInput';

it('renders an input field', () => {
  const component = ReactTestRenderer.create(<DraftNameInput name="Foobar" />);
  expect(component).toMatchSnapshot();
});
