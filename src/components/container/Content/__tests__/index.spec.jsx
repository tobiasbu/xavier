import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Content from '..';

describe('Content', () => {
  it('should render', () => {
    const component = shallow(
      <Content>
        <div>
          Feijão
          <span>Arroz</span>
          Mandioca
        </div>
      </Content>,
    );
    expect(toJSON(component)).toMatchSnapshot();
  });
});
