import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import jsonData from '../../tracks.json';

Enzyme.configure({ adapter: new Adapter() });

it('renders the app', () => {
  const component = shallow(<App demoName="foobar" demoData={jsonData.slice(0, 1)} />);
  expect(component).toMatchSnapshot();
});

it('renders file data after file form submit', () => {
  const component = mount(<App demoName="foobar"  demoData={jsonData.slice(0, 1)} />);
  component.find('.FileForm-form').simulate('submit');
  
  expect(component).toMatchSnapshot();
})

it('updates playlist name after name change', () => {
  const component = mount(<App />);
  component.setState({fileData: jsonData.slice(0, 1), fileName: 'Foobar'});
  component.find('.DraftNameInput').simulate('change', { target: { value: 'Baz' } });

  expect(component).toMatchSnapshot();
});

