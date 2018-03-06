import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConvertMenu from '../ConvertMenu';

Enzyme.configure({ adapter: new Adapter() });

it('renders a menu', () => {
  const component = shallow(<ConvertMenu />);
  expect(component).toMatchSnapshot();
});

describe('getSpotifyAuthorizeUrl', () => {
  const component = shallow(<ConvertMenu />);
  expect(component.instance().getSpotifyAuthorizeUrl()).toMatchSnapshot();
});
