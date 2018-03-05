import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import FileForm from '../FileForm';

it('renders a form', () => {
  const component = ReactTestRenderer.create(<FileForm />);
  expect(component).toMatchSnapshot();
});
