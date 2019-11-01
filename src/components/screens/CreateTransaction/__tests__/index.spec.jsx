import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import CreateTransaction from '..';

describe('Create Transaction screen', () => {
  it('should render', () => {
    const component = shallow(
      <CreateTransaction />,
    );
    expect(toJSON(component)).toMatchSnapshot();
  });
});
