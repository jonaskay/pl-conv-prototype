import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DraftNameInput from '../DraftNameInput';

Enzyme.configure({ adapter: new Adapter() });

it('renders an input field', () => {
  const component = ReactTestRenderer.create(<DraftNameInput name="Foobar" />);
  expect(component).toMatchSnapshot();
});

it('handles input field changes', () => {
  const mockFunc = jest.fn();
  const component = shallow(<DraftNameInput onChange={mockFunc} />)
  component.find('input').simulate('change', { target: { value: 'Foobar' } });

  expect(mockFunc).toBeCalled();
})
