import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';

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
    size={buttonSizes.LG}
    skin={buttonSkins.PRIMARY}>
    onclick button
  </Buuton>)
  const button = component.find('button');
  button.simulate('click');
  expect(component.state().counter).toEqual(1);
})
