// Decorators are executed at the transpilation moment

function printToConsole(constructor: Function) {
  console.log(constructor); // class constuctor
}

const printToConsoleConditional = (print: boolean): Function => {
  return () => {
    if (print) console.log("Hello Decorator");
  };
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// Decorator for a method
export function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log({ target, propertyKey, descriptor });

    // get original method before writting it
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800)
        return console.error("Pokemon id must between 1 and 800");

      return originalMethod(id);
    };
  };
}

// Decorator for a class property
function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        return "Daniel";
      },
      set(this, value) {
        Object.defineProperty(this, propertyKey, {
          value,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@printToConsoleConditional(true)
@blockPrototype
export class Pokemon {
  @readonly(true)
  public publicApo: string = "https://pokeapi.com";

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon was saved on DB: ${id}`);
  }
}
