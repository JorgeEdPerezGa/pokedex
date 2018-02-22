import React from 'react';
import { shallow } from 'enzyme';
import { PokemonList } from './index';

describe('PokemonList', () => {
  let renderedComponent;

  beforeEach(() => {
    const displayTypesMock = jest.fn();
    renderedComponent = shallow(
      <PokemonList
        pokemonTypes={[]}
      />);
  });

  it('should match snapshot', async () => {
    expect(renderedComponent).toMatchSnapshot();
  });
});
