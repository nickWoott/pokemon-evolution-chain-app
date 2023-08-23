import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './evolutionChain.scss';
import { useEffect } from 'react';
// what is actually going on here?
// who k

interface Pokemon {
  name: string;
  variations: [] | Pokemon[];
}

const createLevels = (level: Pokemon[], depth = 0): any[] => {
  const finalArray: any[] = [];
  level.forEach((pokemon: Pokemon) => {
    finalArray.push({ name: pokemon.name, depth: depth });
    if (pokemon.variations && pokemon.variations.length > 0) {
      const variationsArray = createLevels(pokemon.variations, depth + 1);
      finalArray.push(...variationsArray); // Combining the results
    }
  });
  return finalArray;
};

const createLevelledPokemonHtml = (levelledArray) => {
  // Find the maximum depth in the array
  const maxDepth = Math.max(...levelledArray.map((pokemon) => pokemon.depth));

  // Create an array of levels up to the max depth
  const levels = Array.from({ length: maxDepth + 1 }, (_, index) => index);

  return (
    <div className='evolution-chain-container'>
      {levels.map((level) => (
        <div key={level} className={`evolution-level-${level}`}>
          {levelledArray
            .filter((pokemon) => pokemon.depth === level)
            .map((pokemon) => (
              <p key={pokemon.name}>{pokemon.name}</p>
            ))}
        </div>
      ))}
    </div>
  );
};

const EvolutionChain = ({ evolutionChain, isLoading }) => {
  const levelledArray = createLevels([evolutionChain]);
  console.log(JSON.stringify(levelledArray), 'HERE IS THE LEVELLED ARRAY ');

  return isLoading ? (
    <CircularProgress></CircularProgress>
  ) : (
    <div>{createLevelledPokemonHtml(levelledArray)}</div>
  );
};

export default EvolutionChain;
