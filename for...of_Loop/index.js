const spellingWord = 'hippopotamus';

// Write your code below
for (const word of spellingWord) {
  console.log(word);
}


const pokemonList = ["Pikachu", "Charizard", "Squirtle", "Yoshi", "Snorlax"];

// Write your code below
for (const pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}!`);
}
