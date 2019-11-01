import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import renderer from 'react-test-renderer';

import Input from '..';

describe('Input', () => {
  it('should render', () => {
    const component = shallow(<Input label="Descrição" />);
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('check value', () => {
    const component = renderer.create(<Input label="Dinheiro, pra que, Dinheiro?" defaultValue="Se ela não me da bola..." />);
    const intance = component.root;
    const input = intance.findByType('input');
    expect(input.props.defaultValue).toBe('Se ela não me da bola...');
  });
});
