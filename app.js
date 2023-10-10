const pokemon = require('pokemon');
const fs = require('fs');
const data = pokemon.all('ko');

const pokemonList = ""

  for (i=0; i<data.length; i++) {
    pokemonName = `<li>${data[i]}</li>`;
    pokemonList += pokemonName
  }


console.log(pokemonList);

// fs.writeFile("pokemon.html", data, (err) => {
//   if (err) {
//     console.log('error has occured.');
//   } else {
//     console.log('file has created');
//   }
// });



// makeFile(data)
