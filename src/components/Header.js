import styled from 'styled-components';

export default function Header() {
  return <HeaderContainer>Pokedex</HeaderContainer>;
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #d53b47;

  display: flex;
  align-items: center;
  justify-content: center;
`;
