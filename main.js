"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
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
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    const printName = (character) => {
        console.log("Hi" + character.name);
    };
})();
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
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("I am an unique apocalip");
            }
            return Apocalipsis.instance;
        }
    }
    const apocalipsis = Apocalipsis.callApocalipsis();
})();
//# sourceMappingURL=main.js.map