import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Transactions from '..';

describe('Transactions screen', () => {
  it('should render', () => {
    const component = shallow(
      <Transactions />,
    );
    expect(toJSON(component)).toMatchSnapshot();
  });
});
