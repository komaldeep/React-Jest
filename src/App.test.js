import React from 'react';
import renderer from 'react-test-renderer';

// jest.unmock('./App.css');
import App from './App';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});
