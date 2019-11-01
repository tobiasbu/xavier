import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Header from '..';

describe('Header', () => {
  it('should render', () => {
    const component = shallow(
      <Header>
        xavier is cool and have super powers
      </Header>,
    );
    expect(toJSON(component)).toMatchSnapshot();
  });
});
