import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CurrencyInput from '..';

describe('Currency Input', () => {
  it('should render', () => {
    const component = shallow(<CurrencyInput label="Reais" step={50} />);
    expect(toJSON(component)).toMatchSnapshot();
  });

  // HUM! useRef or React.Ref:
  // https://medium.com/@fabianterh/fixing-typeerror-cannot-read-property-property-of-null-in-react-test-renderer-d91d45137de9

  // it('check currency input value', () => {
  //   const onChange = jest.fn;
  //   const value = 10;
  //   const component = renderer.create(<CurrencyInput label="Dinheiro"
  //  step={50} defaultValue={100} />);
  //   const compJson = component.toJSON();
  //   expect(compJson).toMatchSnapshot();
  //   const input = component.findByType('input');
  // });
});
