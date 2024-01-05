const apiUrl = 'https://pokeapi.co/api/v2/ability/1/';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    displayPokemonName(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function displayPokemonName(data) {
const pokemon1 = data.pokemon[0];
const pokemonNameH2 = document.getElementById("pokemonName");

const pokemonName1 = pokemon1.pokemon.name;
const heading = document.createElement("h2");
heading.innerHTML = pokemonName1;
pokemonNameH2.appendChild(heading);
};