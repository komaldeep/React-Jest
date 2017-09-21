import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import Buuton, { buttonSkins, buttonSizes } from './Buuton';

test('renders without crashing', () => {
  const rendered = renderer.create(<Buuton />).toJSON();
  expect(rendered).toMatchSnapshot();
});

test('giving specifioc props to button', () => {
  const component = shallow(<Buuton
    size={buttonSizes.LG}
    skin={buttonSkins.PRIMARY}
    disabled={ false }
    block = {false}
    type='button'>
    This is button
    </Buuton>)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot();
});

test('on click of button', () => {
  const component = mount(<Buuton
    size={buttonSizes.SM}
    skin={buttonSkins.SECONDARY}
    onClick={()=> {}}>
     button with different features
  </Buuton>)
  const button = component.find('button');
  button.simulate('click');
  expect(component.state().counter).toEqual(1);
});

test('should render a right size and skin', () => {
  const wrapper = mount(
    <Buuton
      size={buttonSizes.SM}
      skin={buttonSkins.SECONDARY}>
      button with different features
    </Buuton>
  );
  expect(wrapper.prop('size')).toEqual('sm');
  expect(wrapper.prop('skin')).toEqual('secondary');
});
