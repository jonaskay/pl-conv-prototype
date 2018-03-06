import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import jsonData from '../../tracks.json';

Enzyme.configure({ adapter: new Adapter() });

const shallowed = shallow(<App demoName="foobar" demoData={jsonData.slice(0, 1)} />);

it('renders the app', () => {
  expect(shallowed).toMatchSnapshot();
});

it('renders file data after file form submit', () => {
  const component = mount(<App demoName="foobar"  demoData={jsonData.slice(0, 1)} />);
  component.find('.FileForm-form').simulate('submit');
  
  expect(component).toMatchSnapshot();
})

it('renders file data after Spotify authentication', () => {
  shallowed.setState({accessToken: 'foobar'});

  expect(shallowed).toMatchSnapshot();
})

it('updates playlist name after name change', () => {
  const component = mount(<App />);
  component.setState({fileData: jsonData.slice(0, 1), fileName: 'Foobar'});
  component.find('.DraftNameInput').simulate('change', { target: { value: 'Baz' } });

  expect(component).toMatchSnapshot();
});

it('updates checkbox value after Spotify toggle', () => {
  const component = mount(<App />);
  component.setState(
    {fileData: jsonData.slice(0, 1), fileName: 'Foobar', spotifyAccessToken: 'foobar'}
  );
  component.find('.ConvertMenuField-input').first().simulate('click');

  expect(component).toMatchSnapshot();
});

describe('getAccessTokenFromHash', () => {
  it('returns access token', () => {
    const accessToken = shallowed.instance().getAccessTokenFromHash('#access_token=foobar&baz=qux');
    expect(accessToken).toBe('foobar');
  });

  it('returns an empty string', () => {
    const accessToken = shallowed.instance().getAccessTokenFromHash('');
    expect(accessToken).toBe('');  
  })
});

