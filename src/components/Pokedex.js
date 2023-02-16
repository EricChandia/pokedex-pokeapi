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
  width: 60vw;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  flex-wrap: wrap;
`;
