// require("./batman.js");
// require("./superman.js")

// const superHero = require("./super-hero")
// console.log(superHero.getName())
// superHero.setName("Superman")
// console.log(superHero.getName())

// //Module caching: Even though we create a new instance this will return the same value with the previous
// const superHero2 = require("./super-hero")
// console.log(superHero2.getName())

const SuperHero = require("./super-hero")

const batman = new SuperHero("Batman")
console.log(batman.getName())
batman.setName("Bruce")
console.log(batman.getName())

const superman = new SuperHero("Superman")
console.log(superman.getName())