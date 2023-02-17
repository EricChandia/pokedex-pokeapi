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

export async function getAllPokemons(offset) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`;
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

export async function getPokemonDetails(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    return response.data;
  } catch (error) {
    console.log('getPokemonDetails: ' + error);
  }
}
