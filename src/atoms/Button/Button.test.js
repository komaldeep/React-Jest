import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import Button, { buttonSkins, buttonSizes } from './Button';

test('renders without crashing', () => {
  const rendered = renderer.create(<Button />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('giving specifioc props to button', () => {
  const component = shallow(<Button
    size={buttonSizes.LG}
    skin={buttonSkins.PRIMARY}
    disabled={ false }
    block = {false}
    type='button'>
    This is button
    </Button>)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot();
});

test('on click of button', () => {
  const component = mount(<Button
    size={buttonSizes.SM}
    skin={buttonSkins.SECONDARY}
    onClick={()=> {}}
    buttonClicked={()=> {}} >
     button with different features
  </Button>)
  const button = component.find('button');
  button.simulate('click');
});

test('should render a right size and skin', () => {
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
