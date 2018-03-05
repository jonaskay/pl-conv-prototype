import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FileForm from '../FileForm';

Enzyme.configure({ adapter: new Adapter() });

it('renders a form', () => {
  const component = shallow(<FileForm />);
  expect(component).toMatchSnapshot();
});

it('handles form submit', () => {
  const mockFunc = jest.fn();
  const component = shallow(<FileForm onSubmit={mockFunc} />);
  component.find('.FileForm-form').simulate('submit');

  expect(mockFunc).toBeCalled();
})
