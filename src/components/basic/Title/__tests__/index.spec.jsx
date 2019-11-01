import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Title from '..';

describe('Title', () => {
  it('should render', () => {
    const component = shallow(<Title size={1}>Titulo do saite</Title>);
    expect(toJSON(component)).toMatchSnapshot();
  });
});
