//import * as HeroClasses from "./classes/Hero";
//import { Hero as SuperHero, Hero2 } from "./classes/Hero";
//import powers, { Power } from "./data/powers";
//import { Hero, Hero2 } from "./classes/Hero";
import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from "./generics/generics";
import { getPokemon } from "./generics/get-pokemon";
import { Hero } from "./interfaces/hero";

console.log("Hola Mundo!");

//const ironman = new Hero("Spiderman", 2, 22);
//console.log(ironman.power);

printObject(123);
printObject(new Date());
printObject({ a: 1, b: 2 });
printObject([1, 2, 3, 4]);

genericFunction(new Date()).toISOString();

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLever: 130,
};

console.log(genericFunctionArrow<Hero>(deadpool).realName); // .dangerLavel throw a error because you use Hero like the generic type that the functions will return

getPokemon(1)
  .then((pokemon) => console.log(pokemon))
  .catch((error) => console.error(error))
  .finally(() => console.log("Final"));

// DECORATORS

// Decorators
// A decorator is a function that can expand the functionability on a class

import { CheckValidPokemonId, Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("charmander");

// THROW ERROR BECAUSE WE ARE USING BLOCK DECORATOR
//(Pokemon.prototype as any).cusomName = "Pikachu";

console.log("CHARMANDER");
console.log(charmander);

charmander.savePokemonToDB(50000); // throw an error because we are usign CheckValidPokemonId decorator
charmander.savePokemonToDB(50);

charmander.publicApo = "changed"; // throw an error because we are usign readonly decorator
