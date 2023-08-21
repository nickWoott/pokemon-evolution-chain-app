import axios from 'axios';

export const getEvolutionChainUrl = async (
  pokemonName: string
): Promise<string> => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`
    );

    const evolutionChainUrl = response.data.evolution_chain.url;
    return evolutionChainUrl;
  } catch (error) {
    throw error;
  }
};

export const getPokemonEvolutionChain = async (
  chainUrl: string
): Promise<object> => {
  try {
    const response = await axios.get(chainUrl);

    const evolutionChain = response.data.chain;
    return evolutionChain;
  } catch (error) {
    throw error;
  }
};
