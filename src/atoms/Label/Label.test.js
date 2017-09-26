import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';
import { shallow, mount } from 'enzyme';

test('renders without crashing', () => {
  const rendered = renderer.create(<Label />).toJSON();
  expect(rendered).toMatchSnapshot();
});
