(() => {
  // singleton
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("I am an unique apocalip");
      }

      return Apocalipsis.instance;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  // if you create another const with the same class methos you will get the same instance that was created
  //const apocalipsis2 = new Apocalipsis("I am apocolip2");
  // const apocalipsis3 = new Apocalipsis("I am apocolip3");
})();
