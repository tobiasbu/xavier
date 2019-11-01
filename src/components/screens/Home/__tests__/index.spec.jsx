import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Home from '..';

describe('Home screen', () => {
  it('should render', () => {
    const component = shallow(
      <Home />,
    );
    expect(toJSON(component)).toMatchSnapshot();
  });
});
