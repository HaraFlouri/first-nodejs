#!/usr/bin/env node
const inquirer = require("inquirer")

const printByFiveMoves = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokemon = await response.json();
  const moves = pokemon.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

const promt = inquirer.createPromptModule()
promt([{
    type:"input",
    name: "pokemon",
    message: "Enter a pokemon name to view the first five moves"
}]).then((answers) => {
    const pokemon = answers.pokemon
    printByFiveMoves(argv.pokemon);
})
