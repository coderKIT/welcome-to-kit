const pokedex = document.getElementById("pokedex");

const getPokemon = () => {
  const promises = [];
  for (let i = 252; i <= 386; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}/`
    promises.push(fetch(url).then((response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })))

    Promise.all(promises).then(result => {
      const pokemon = result.map(data => ({
        id: data.id,
        name: data.name,
        image: data.sprites["front_default"],
      }))
      console.log(pokemon)
      displayPokemon(pokemon)
    })
  }
};

const displayPokemon = pokemon => {
  const pokemonString = pokemon
    .map(
      singlePokemon => `
    <li>
      <img src="${singlePokemon.image}" />
      <h3>${singlePokemon.id}. ${singlePokemon.name}</h3>
    </li>`
    )
    .join("")
  pokedex.innerHTML = pokemonString
}
getPokemon();