import React from 'react';
import renderer from 'react-test-renderer';
import InputText from './InputText';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

test('renders without crashing', () => {
  const rendered = renderer.create(<InputText />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('inputfield with different feature', () => {
  const rendered = shallow(
    <InputText
      type= 'text'
      placeholder="placeholder for input text"
      disabled= {false}
      showSuccess= {false}
      showError= {false}
      pending= {false}
      focus= {false}
  />);
  const tree = toJson(rendered);
  expect(tree).toMatchSnapshot();
});

test('should render a right type and text', () => {
  const wrapper = mount(
    <InputText
      type= 'text'
      placeholder="placeholder for input text"
      disabled= {false}
      showSuccess= {false}
      showError= {false}
      pending= {false}
      focus= {false}
    />);
  expect(wrapper.prop('type')).toEqual('text');
  expect(wrapper.prop('placeholder')).toEqual('placeholder for input text');
  expect(wrapper.prop('disabled')).toEqual(false);
  expect(wrapper.prop('showSuccess')).toEqual(false);
  expect(wrapper.prop('showError')).toEqual(false);
  expect(wrapper.prop('pending')).toEqual(false);
  expect(wrapper.prop('focus')).toEqual(false);
});

test('inputfield onchange event', () => {
  const wrapper = shallow(
    <InputText
      type="text"
      name="name"
      onChange={() => {}}
      inputValue={() => {}}
    />
  );
  wrapper.find('input').simulate('change', { target: {
    value: 'Change function' },
  });
  expect(wrapper.state().value).toEqual('Change function');
});
