import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Text from '..';

describe('Text', () => {
  it('should render', () => {
    const component = shallow(<Text size={4}>Uma palabra por-favor</Text>);
    expect(toJSON(component)).toMatchSnapshot();
  });
});
