// Decorators
// A decorator is a function that can expand the functionability on a class

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon("charmander");

//(Pokemon.prototype as any).cusomName = "Pikachu";

charmander.savePokemonToDB(50);
