(() => {
  // a type can not extend itself and an interface can do it

  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["speed", "stroght"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 30,
    powers: [""],
    getName(): string {
      return this.name;
    },
  };
})();
