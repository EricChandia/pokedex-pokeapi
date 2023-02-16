import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllPokemons, getPokemonData } from '../services/api';
import Card from './Card';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  async function fetchPokemons() {
    try {
      setLoading(true);
      setError(false);
      const data = await getAllPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);

      console.log(results);
    } catch (error) {
      setError(true);
      console.log('fetchPokemons error: ', error);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return loading ? (
    <div>Carregado...</div>
  ) : (
    <PokedexContainer>
      {pokemons.map((pokemon, index) => (
        <Card key={index} pokemonInfo={pokemon} />
      ))}
    </PokedexContainer>
  );
}

const PokedexContainer = styled.div`
  width: 80vw;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  @media (max-width: 700px) {
    width: 100vw;
    height: 100%;
  }

  @media (min-width: 700px) {
    width: 95vw;
    height: 100%;
  }

  @media (min-width: 900px) {
    width: 90vw;
    height: 100%;
  }

  @media (min-width: 1200px) {
    width: 85vw;
    height: 100%;
  }
`;
