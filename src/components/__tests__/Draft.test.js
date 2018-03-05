import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsonData from '../../tracks.json';
import Draft from '../Draft';

Enzyme.configure({ adapter: new Adapter() });

it('renders a playlist draft', () => {
  const component = shallow(<Draft items={jsonData.slice(0, 1)} />);
  expect(component).toMatchSnapshot();
});

it('renders an empty div when items are missing', () => {
  const component = shallow(<Draft />);
  expect(component).toMatchSnapshot();
});

it('updates playlist name after name change', () => {
  const component = mount(<Draft items={jsonData.slice(0, 1)} />)
  component.find('input').simulate('change', { target: { value: 'Foobar' } });
  expect(component).toMatchSnapshot();
});

it('updates selected track after clicking an unselected item', () => {
  const component = mount(<Draft items={jsonData.slice(0, 1)} />)
  component.find('.DraftItem').simulate('click');
  expect(component).toMatchSnapshot();
});

it('updates selected track after clicking a selected item', () => {
  const component = mount(<Draft items={jsonData.slice(0, 1)} />)
  component.setState({selectedTrack: jsonData[0]});
  component.find('.DraftItem').simulate('click');
  
  expect(component).toMatchSnapshot();
});
