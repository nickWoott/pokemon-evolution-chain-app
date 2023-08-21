import { PokemonEvolutionChain } from '../interfaces';

export const createChainDto = (evolutionChain: any): PokemonEvolutionChain => {
  const dto = { name: evolutionChain.species.name, variations: [] };

  if (evolutionChain.evolves_to && evolutionChain.evolves_to.length > 0) {
    dto.variations = evolutionChain.evolves_to.map((element: any) =>
      createChainDto(element)
    );
  }

  return dto;
};
