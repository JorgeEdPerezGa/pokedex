import React from 'react';
import { shallow } from 'enzyme';
import { PokemonCard } from './index';

describe('PokemonCard', () => {
  const renderedComponent = shallow(<PokemonCard type={{}}/>);

  it('should match snapshot', async () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
