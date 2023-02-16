import styled from 'styled-components';
import Card from './Card';

export default function Pokedex() {
  return (
    <PokedexContainer>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </PokedexContainer>
  );
}

const PokedexContainer = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
