import React from 'react';
import renderer from 'react-test-renderer';
import Label from './Label';
import { shallow, mount } from 'enzyme';

test('renders without crashing', () => {
  const rendered = renderer.create(<Label />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('should render a right origin', () => {
  const wrapper = mount(
    <Button
      size={buttonSizes.SM}
      skin={buttonSkins.SECONDARY}>
      button with different features
    </Button>
  );
  expect(wrapper.prop('size')).toEqual('sm');
  expect(wrapper.prop('skin')).toEqual('secondary');
});