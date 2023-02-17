import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllPokemons, getPokemonData } from '../services/api';
import { IconLeftButton, IconRightButton } from './Button';
import Card from './Card';
import Loading from './Loading';

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);
  const localOffset = localStorage.getItem('offset') ? Number(localStorage.getItem('offset')) : 0;
  const [offset, setOffset] = useState(0);

  async function fetchPokemons() {
    try {
      setLoading(true);
      setError(false);
      const data = await getAllPokemons(localOffset);
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

  function nextOffset() {
    setOffset(offset + 50);
    localStorage.setItem('offset', Number(localOffset) + 50);
  }

  function backOffset() {
    setOffset(offset - 50);
    localStorage.setItem('offset', Number(localOffset) - 50);
  }

  useEffect(() => {
    fetchPokemons();
    console.log(localOffset);
  }, [offset]);

  return loading ? (
    <Loading />
  ) : (
    <PokedexContainer>
      <PageControll>
        {localOffset === 0 ? (
          false
        ) : (
          <PreviewPage onClick={() => backOffset()}>
            <IconLeftButton />
          </PreviewPage>
        )}
        <NextPage onClick={() => nextOffset()}>
          <IconRightButton />
        </NextPage>
      </PageControll>
      {pokemons.map((pokemon, index) => (
        <Card key={index} pokemonInfo={pokemon} />
      ))}
    </PokedexContainer>
  );
}

const PageControll = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NextPage = styled.div`
  cursor: pointer;
`;

const PreviewPage = styled.div`
  cursor: pointer;
`;

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
