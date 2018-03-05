import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import DraftItemCounter from '../DraftItemCounter';

it('renders item count for 0 items', () => {
  const component = ReactTestRenderer.create(<DraftItemCounter items={[]} />);
  expect(component).toMatchSnapshot();
})

it('renders item count for 1 item', () => {
  const component = ReactTestRenderer.create(<DraftItemCounter items={['foo']} />);
  expect(component).toMatchSnapshot();
})

it('renders item count for multiple items', () => {
  const component = ReactTestRenderer.create(<DraftItemCounter items={['foo', 'bar']} />);
  expect(component).toMatchSnapshot();
})
