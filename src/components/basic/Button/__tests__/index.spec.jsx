import React from 'react';
import renderer from 'react-test-renderer';
import Button from '..';

describe('Astro Button', () => {
  it('common render', () => {
    const component = renderer.create(<Button title="Listen to LZ">Ramble on and now s the time, the time is now, to sing my song</Button>);
    const compJson = component.toJSON();
    expect(compJson).toMatchSnapshot();
  });

  it('with color', () => {
    const component = renderer.create(<Button title="Green Button" color="earth">Earth</Button>);
    const compJson = component.toJSON();
    expect(compJson).toMatchSnapshot();
  });
});
