import { createChainDto } from '.';
import { PokemonEvolutionChain } from '../interfaces';

describe('createChainDto', () => {
  it('transforms evolution chain data into DTO format', () => {
    const mockEvolutionChain = {
      species: { name: 'bulbasaur' },
      evolves_to: [
        {
          species: { name: 'ivysaur' },
          evolves_to: [
            {
              species: { name: 'venusaur' },
              evolves_to: [],
            },
          ],
        },
      ],
    };

    const expectedDto: PokemonEvolutionChain = {
      name: 'bulbasaur',
      variations: [
        {
          name: 'ivysaur',
          variations: [
            {
              name: 'venusaur',
              variations: [],
            },
          ],
        },
      ],
    };

    const result = createChainDto(mockEvolutionChain);
    expect(result).toEqual(expectedDto);
  });

  it('returns DTO with empty variations for no evolution', () => {
    const mockEvolutionChain = {
      species: { name: 'mew' },
      evolves_to: [],
    };

    const expectedDto: PokemonEvolutionChain = {
      name: 'mew',
      variations: [],
    };

    const result = createChainDto(mockEvolutionChain);
    expect(result).toEqual(expectedDto);
  });
});
