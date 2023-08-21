import axios from 'axios';
import { getEvolutionChainUrl, getPokemonEvolutionChain } from '.';

jest.mock('axios');

describe('getEvolutionChainUrl', () => {
  it('returns evolution chain URL for a valid Pokémon name', async () => {
    const pokemonName = 'bulbasaur';
    const mockResponse = {
      evolution_chain: {
        url: 'https://example.com/evolution-chain',
      },
    };

    const axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockResolvedValue({ data: mockResponse });

    const result = await getEvolutionChainUrl(pokemonName);
    expect(result).toBe(mockResponse.evolution_chain.url);
  });

  it('throws an error for an invalid Pokémon name', async () => {
    const pokemonName = 'invalidPokemon';
    const mockError = new Error('Pokemon not found');

    const axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockRejectedValue(mockError);

    await expect(getEvolutionChainUrl(pokemonName)).rejects.toThrow(mockError);
  });
});

describe('getPokemonEvolutionChain', () => {
  it('returns evolution chain data for a valid URL', async () => {
    const mockChainUrl = 'https://example.com/evolution-chain';
    const mockResponse = {
      chain: {
        test: 'test chain data',
      },
    };

    const axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockResolvedValue({ data: mockResponse });

    const result = await getPokemonEvolutionChain(mockChainUrl);
    expect(result).toEqual(mockResponse.chain);
  });

  it('throws an error for an invalid URL', async () => {
    const mockChainUrl = 'invalidUrl';
    const mockError = new Error('Invalid URL');

    const axiosGetMock = jest.spyOn(axios, 'get');
    axiosGetMock.mockRejectedValue(mockError);

    await expect(getPokemonEvolutionChain(mockChainUrl)).rejects.toThrow(
      mockError
    );
  });
});
