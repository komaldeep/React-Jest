import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import WrapperLogin from './WrapperLogin';

test('renders without crashing', () => {
  const rendered = renderer.create(<WrapperLogin />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('on click of button', () => {
  const component = mount( <WrapperLogin /> )
  const button = component.find('Button');
  button.simulate('click');
});