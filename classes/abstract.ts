(() => {
  // you can create another class using extendes, it could be like a template
  // you can not create an instance!!!
  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutant {
    saveWorld() {
      return "World is saved";
    }
  }
  class Villian extends Mutant {
    destroyWorld() {
      return "World is destroyed";
    }
  }

  const wolverine: Mutant = new Xmen("Wolverine", "Logan");
  const magneto = new Villian("Magneto", "Magnus");

  const printName = (character: Mutant) => {
    console.log("Hi" + character.name);
  };
})();
