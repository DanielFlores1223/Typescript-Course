(() => {

   /*  class Avenger {
        private name: string;
        public team: string; 
        public realName?: string;
        static avgAge: number = 35; // Solo se puede acceder a ella desde la clase NO la instancia

        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    } */

    // short way to create a Class
    class Avenger {
        static avgAge: number = 35; // Solo se puede acceder a ella desde la clase NO la instancia, acceder desde la clase sin necesidad de una instancia
        static getAvgAge() {
            return this.name; //return class name: Avenger
        }

        constructor(
            private name: string, 
            public team: string, 
            public realName?: string
        ) {}

        public bio(): string {
            return `${this.name} (${this,this.team})`;
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Captian');
})();