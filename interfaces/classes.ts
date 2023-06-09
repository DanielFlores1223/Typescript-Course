(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  /**
     * extends means:
        The new class is a child. It gets benefits coming with inheritance. It has all the properties and methods of its parent. It can override some of these and implement new ones, but the parent stuff is already included.

       implements means:
        The new class can be treated as the same "shape", but it is not a child. It could be passed to any method where Person is required, regardless of having a different parent than Person.
     * 
     */

  /**
   * 
   In Typescript an implements clause can be used to verify that a class conforms to a specific interface. If a class fails to implement an interface correctly, an error will be generated. Classes can implement a single interface or multiple interfaces at once.
   */

  class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;

    mutantPower(id: number): string {
      return this.name + " " + this.realName;
    }
  }
})();
