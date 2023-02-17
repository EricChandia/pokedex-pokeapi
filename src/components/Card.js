import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Card({ index, pokemonInfo }) {
  const navigate = useNavigate();

  function openPokemonInfo(pokemonInfo) {
    navigate(`pokemon/${pokemonInfo.id}`, { state: pokemonInfo });
  }

  return (
    <CardContainer onClick={() => openPokemonInfo(pokemonInfo)}>
      <ImageContainer>
        <Image
          alt={pokemonInfo.name}
          // eslint-disable-next-line no-undef, prettier/prettier
          src={pokemonInfo.sprites.other["official-artwork"].front_default}
        />
      </ImageContainer>
      <CardInfo>
        <PokeName>
          <h3>
            #{pokemonInfo.id} {pokemonInfo.name}
          </h3>
        </PokeName>
        <PokeInfo>
          <></>
        </PokeInfo>
      </CardInfo>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  min-width: 16vw;
  height: 24vh;
  margin: 5px 5px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: pink;
  cursor: pointer;

  @media (max-height: 700px) {
    min-width: 44vw;
    height: 28vh;
  }

  @media (max-width: 600px) {
    min-width: 44vw;
    height: 24vh;
  }

  @media (min-width: 600px) {
    min-width: 30vw;
    height: 24vh;
  }

  @media (min-width: 900px) {
    min-width: 25vw;
    height: 24vh;
  }

  @media (min-width: 1100px) {
    min-width: 20vw;
    height: 24vh;
  }

  @media (min-width: 1400px) {
    min-width: 16vw;
    height: 24vh;
  }
`;

const ImageContainer = styled.div`
  width: 70%;
  height: 80%;

  display: flex;
  align-items: center;
  justify-content: center;

  img:hover {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake 5s;

    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CardInfo = styled.div`
  width: 100%;
  height: 20%;
`;

const PokeName = styled.div`
  width: 100%;
  height: 100%;

  font-size: 100%;

  word-break: break-all;
  word-wrap: break-word;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PokeInfo = styled.div``;
