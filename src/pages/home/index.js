import styled from 'styled-components';
import Pokedex from '../../components/Pokedex';
import Header from '../../components/Header';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <Pokedex />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
