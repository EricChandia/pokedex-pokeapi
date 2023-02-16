import axios from 'axios';

export async function searchPokemon(pokemon) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('searchPokemon: ' + error);
  }
}

export async function getAllPokemons(limit = 50, offset = 0) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getAllPokemons: ' + error);
  }
}

export async function getPokemonData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('getPokemonData: ' + error);
  }
}
