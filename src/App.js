import './App.scss';
import InputField from './components/Input.tsx';
import Header from './components/Header.tsx';
import EvolutionChain from './components/EvolutionChain.tsx';
import { useState } from 'react';

function App() {
  const [evolutionChain, setEvolutionChain] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='App'>
      <Header></Header>
      <EvolutionChain
        evolutionChain={evolutionChain}
        isLoading={isLoading}
      ></EvolutionChain>
      <InputField
        evolutionChain={evolutionChain}
        setEvolutionChain={setEvolutionChain}
        setIsLoading={setIsLoading}
      ></InputField>
    </div>
  );
}

export default App;
