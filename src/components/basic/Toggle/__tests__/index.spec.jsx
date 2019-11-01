import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import Toogle from '..';

describe('Toogle', () => {
  it('should render Toogle', () => {
    const component = shallow(
    <Toogle checked label="Você quer ir ao cinema?" title="Marcar um cinema com os amigos?" />
    );
    expect(toJSON(component)).toMatchSnapshot();
  });
});
