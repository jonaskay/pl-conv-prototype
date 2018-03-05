import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsonData from '../../tracks.json';
import DraftItem from '../DraftItem';

Enzyme.configure({ adapter: new Adapter() });

it('renders a draft item', () => {
  const component = shallow(<DraftItem item={jsonData[0]} />);
  expect(component).toMatchSnapshot();
});

it('renders a selected draft item', () => {
  const component = shallow(<DraftItem item={jsonData[0]} selected={true} />);
  expect(component).toMatchSnapshot();
});

it('handles a click', () => {
  const mockFunc = jest.fn();
  const component = shallow(<DraftItem item={jsonData[0]} onClick={mockFunc} />)
  component.find('.DraftItem').simulate('click');

  expect(mockFunc).toBeCalled();
})
