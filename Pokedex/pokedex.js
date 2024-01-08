const getPokemon = () => {
  const promises = [];
  for (let i = 100; i <= 200; i++) {
    const url = `https://pokeapi.co/api/v2/ability/${i}/`
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const pokemon = {};
    pokemon["id"] = data.id;
    pokemon["name"] = data.name;
    pokemon["generation"] = data.generation;
    pokemon["img"] = data.sprites["front_default"]
  })
  .catch(error => {
    console.error('Error:', error);
  });
  }
}

getPokemon();

function displayPokemonName(data) {
const pokemon1 = data.pokemon[0];
const pokemonNameH2 = document.getElementById("pokemonName");

const pokemonName1 = pokemon1.pokemon.name;
const heading = document.createElement("h2");
heading.innerHTML = pokemonName1;
pokemonNameH2.appendChild(heading);
};