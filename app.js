const pokemon = require('pokemon');
const fs = require('fs');
const data = pokemon.all('ko');
let pokemonList = ""

// putpokemonName between li tag
for (i=0; i<data.length; i++) {
  let pokemonName = `<li>${data[i]}</li>`;
  pokemonList += pokemonName
}

// create file with contents
fs.writeFile("pokemon.html", pokemonList, (err) => {
  if (err) {
    console.log('error has occured.');
  } else {
    console.log('file has created');
  }
});



