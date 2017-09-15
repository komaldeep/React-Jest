import React from 'react';
import renderer from 'react-test-renderer';
import Buuton from './Buuton';

it('renders without crashing', () => {
  const rendered = renderer.create(<Buuton />).toJSON();
  expect(rendered).toMatchSnapshot();
});
