(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger called");
    }

    // protected access, you can access to methods from extends
    // private access, you can acces to methods inside class
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Xmen Constructor called");
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (this.name.length < 3)
        throw new Error("name property must have 3 characteres or more");
      this.name = name;
    }

    getFullNameFromXmen() {
      super.getFullName();
    }
  }

  // if the Xmen constructor does not exist in Xmen class, typescript cretes it automatically taking Avenger constructor

  const wolverine = new Xmen("Wolverine", "Logan", true);

  console.log(wolverine.fullName); //get, you dont need to execute it, it works well
  wolverine.fullName = "Pedri"; // set new values
})();
