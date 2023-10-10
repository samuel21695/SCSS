const pokemon = require('pokemon');
const fs = require('fs');
const data = `${pokemon.all('ko')}`;
console.log(typeof(data))

fs.writeFile("pokemon.html", data, (err) => {
  if (err) {
    console.log('error has occured.');
  } else {
    console.log('file has created');
  }
});