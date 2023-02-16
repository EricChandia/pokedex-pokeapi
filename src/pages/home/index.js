import styled from 'styled-components';
import Pokedex from '../../components/Pokedex';

export default function Home() {
  return (
    <HomeContainer>
      <Pokedex />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
