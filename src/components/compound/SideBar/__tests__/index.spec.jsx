import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import SideBar from '..';

describe('SideBar', () => {
  it('should render', () => {
    const component = shallow(<SideBar />);
    expect(toJSON(component)).toMatchSnapshot();
  });
});
