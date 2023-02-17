import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IconLeftButton } from '../../components/Button';
import { getPokemonDetails } from '../../services/api';

export default function PokeInfo() {
  const location = useLocation();
  const { state: pokemon } = location;
  const [pkmDetails, setPkmDetails] = useState([]);
  const [loading, setLoading] = useState([]);
  const [pkmFlavorText, setPkmFlavorText] = useState([]);

  const navigate = useNavigate();

  async function fetchPokemonDetails() {
    setLoading(true);
    const details = await getPokemonDetails(pokemon.id);

    let flavor_text = details.flavor_text_entries[0].flavor_text;
    flavor_text = flavor_text.replace(/(\r\n|\n|\r|\f)/gm, ' ');

    setPkmDetails(details);
    setPkmFlavorText(flavor_text);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <PokemonContainer backColor={loading ? false : pkmDetails.color.name}>
      <PreviewPage onClick={() => navigate('/')}>
        <IconLeftButton />
      </PreviewPage>
      <PokemonInfo>
        <PokemonImageContainer>
          <PokemonImage
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}></PokemonImage>
        </PokemonImageContainer>
        <PokemonCardDetails>
          <CardDetailsTop>
            #{pokemon.id} {pokemon.name}
          </CardDetailsTop>
          <CardDetailsMiddle>
            <CardDetailsMiddleLeft>
              <div>Type</div>
              <div>Height</div>
              <div>Weight</div>
              <div>Generation</div>
            </CardDetailsMiddleLeft>
            <CardDetailsMiddleRight>
              <div>
                {pokemon.types.map((typeInfo, i, { length }) => {
                  if (i + 1 === length) {
                    return `${typeInfo.type.name}`;
                  } else {
                    return `${typeInfo.type.name} | `;
                  }
                })}
              </div>
              <div>{pokemon.height}`</div>
              <div>{pokemon.weight} lbs</div>
              {loading ? <>...</> : <div>{pkmDetails.generation.name}</div>}
            </CardDetailsMiddleRight>
          </CardDetailsMiddle>
          {loading ? <div>...</div> : <CardDetailsBottom>{pkmFlavorText}</CardDetailsBottom>}
        </PokemonCardDetails>
      </PokemonInfo>
    </PokemonContainer>
  );
}

const PokemonContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #242423;

  background-color: ${(props) => props.backColor || '#242423'};
`;

const PokemonInfo = styled.div`
  width: 30%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 500px) {
    width: 80%;
    height: 100%;
  }

  @media (min-width: 700px) {
    width: 60%;
    height: 100%;
  }

  @media (min-width: 900px) {
    width: 45%;
    height: 100%;
  }

  @media (min-width: 1300px) {
    width: 40%;
    height: 100%;
  }

  @media (min-width: 1500px) {
    width: 35%;
    height: 100%;
  }
`;

const PokemonImageContainer = styled.div`
  width: 80%;
  height: 40%;

  margin-top: 5vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PokemonImage = styled.img`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  object-fit: contain;
`;

const PokemonCardDetails = styled.div`
  width: 100%;
  height: 60%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardDetailsTop = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecebec;
`;

const CardDetailsMiddle = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardDetailsMiddleLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ecebec;

  div {
    height: 25%;
    width: 100%;
    border-bottom: 3px solid #e0e0e0;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CardDetailsMiddleRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  div {
    height: 25%;
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const CardDetailsBottom = styled.div`
  margin-top: 5px;
  padding: 10px 10px;
  height: 30%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ecebec;
`;

const PreviewPage = styled.div`
  position: fixed;
  cursor: pointer;
  left: 0;
  top: 0;
  margin: 5% 5%;
`;
