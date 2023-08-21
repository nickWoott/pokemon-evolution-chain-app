import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const createEvolutionChainHtml = (evolutionChain) => {
  if (evolutionChain.variations && evolutionChain.variations.length > 0) {
    return (
      <div>
        {evolutionChain.name}
        {evolutionChain.variations.map((element, index) => (
          <div key={index}>{createEvolutionChainHtml(element)}</div>
        ))}
      </div>
    );
  }
  return <div>{evolutionChain.name}</div>;
};

const EvolutionChain = ({ evolutionChain, isLoading }) => {
  if (isLoading) return <CircularProgress></CircularProgress>;

  return <div>{createEvolutionChainHtml(evolutionChain)}</div>;
};

export default EvolutionChain;
