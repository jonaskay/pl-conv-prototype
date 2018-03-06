import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConvertMenuField from '../ConvertMenuField';

Enzyme.configure({ adapter: new Adapter() });

const mockFunc = jest.fn();
const shallowed = shallow(
  <ConvertMenuField name="Foobar" onInputClick={mockFunc} onButtonClick={mockFunc} />
);

it('renders a field', () => {
  expect(shallowed).toMatchSnapshot();
});

it('renders an authenticated field', () => {
  const component = shallow(<ConvertMenuField name="Foobar" authenticated={true} />);
  expect(component).toMatchSnapshot();  
})

it('renders a disabled button', () => {
  const component = shallow(<ConvertMenuField name="Foobar" authDisabled={true} />);
  expect(component).toMatchSnapshot();  
});

it('handles a button click', () => {
  shallowed.find('.ConvertMenuField-button').simulate('click');
  expect(mockFunc).toBeCalled();
});

it('handles a checkbox click', () => {
  shallowed.find('.ConvertMenuField-input').simulate('click');
  expect(mockFunc).toBeCalled();
})
