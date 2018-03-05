import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Modal from '../Modal';

it('renders a modal', () => {
  const component = ReactTestRenderer.create(<Modal><div>Foobar</div></Modal>);
  expect(component).toMatchSnapshot();
});
