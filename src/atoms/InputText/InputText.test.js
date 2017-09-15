import React from 'react';
import renderer from 'react-test-renderer';
import InputText from './InputText';

it('renders without crashing', () => {
  const rendered = renderer.create(<InputText />).toJSON();
  expect(rendered).toMatchSnapshot();
});
