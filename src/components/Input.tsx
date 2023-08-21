import React from 'react';
import { useState } from 'react';
import * as api from '../api/index.ts';
import * as dto from '../dto/index.ts';

const InputField = ({ evolutionChain, setEvolutionChain, setIsLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const evolutionChainUrl = await api.getEvolutionChainUrl(inputValue);
      const evolutionChainFromApi = await api.getPokemonEvolutionChain(
        evolutionChainUrl
      );
      const transformedEvolutionChain = dto.createChainDto(
        evolutionChainFromApi
      );
      setEvolutionChain(transformedEvolutionChain);
      setIsLoading(false);
      console.log(evolutionChain);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      <button type='submit'>Go!</button>
    </form>
  );
};

export default InputField;
