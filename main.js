"use strict";
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this, this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Captian');
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger called");
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Xmen Constructor called");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (this.name.length < 3)
                throw new Error("name property must have 3 characteres or more");
            this.name = name;
        }
        getFullNameFromXmen() {
            super.getFullName();
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    console.log(wolverine.fullName);
    wolverine.fullName = "Pedri";
})();
//# sourceMappingURL=main.js.map