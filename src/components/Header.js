import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <PokedexSensorCircle>
        <PokedexSensor />
      </PokedexSensorCircle>
      <PokedexLights>
        <PokedexLight1 />
        <PokedexLight2 />
        <PokedexLight3 />
      </PokedexLights>
      <h1>Pokedex</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  background-color: #d53b47;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4vh;
    margin-top: 4vh;
  }
`;

const PokedexSensorCircle = styled.div`
  width: 5.6vh;
  height: 5.6vh;
  margin-left: 8.5%;
  left: 0;

  position: absolute;
  background-color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokedexSensor = styled.div`
  width: 4.6vh;
  height: 4.6vh;
  background-color: #226799;
  border-radius: 100%;
`;

const PokedexLights = styled.div`
  width: 10vh;
  height: 20px;
  margin-left: 20%;
  margin-top: 1vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PokedexLight1 = styled.div`
  width: 1.5vh;
  height: 1.5vh;
  background-color: red;
  border-radius: 100%;
`;

const PokedexLight2 = styled.div`
  width: 1.5vh;
  height: 1.5vh;
  background-color: yellow;
  border-radius: 100%;
`;

const PokedexLight3 = styled.div`
  width: 1.5vh;
  height: 1.5vh;
  background-color: green;
  border-radius: 100%;
`;
