"use strict";
const message = 'Hello world!!!';
const hero = {
    name: 'Ironman',
    age: 45
};
hero.age = 50;
console.log(message);
console.log(hero.age);
function sayHello(message) {
    message.trim();
}
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || '-'}`.toUpperCase();
        return `${firstName} ${lastName || '-'}`;
    };
    const name = fullName('Tony');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '-'}`;
    };
    const name = fullName('Tony');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
})();
(() => {
    const fullName = (...rest) => {
        return `${rest.join(' ')}`;
    };
    const superman = fullName('Daniel', 'Flores', 'Orozco');
    console.log(superman);
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hi ${name}`;
    const saveTheWorld = () => `We are working on it!`;
    let myFunction1;
    let myFunction2;
    let myFunction3;
    myFunction1 = addNumbers;
    myFunction2 = greet;
    myFunction3 = saveTheWorld;
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'It was activated';
    };
    const heroName = returnName();
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'stroght']
    };
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super stronght', 'fly'],
        getName() {
            return this.name;
        }
    };
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'stroght']
    };
    let superman = {
        name: 'Clark Kent',
        age: 30,
        powers: [''],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Fernando';
    myCustomVariable = 20;
    myCustomVariable = {
        name: 'Spiderman',
        age: 21,
        powers: ['']
    };
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.232568;
    console.log(avenger.toFixed(2));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['villian1', 'villian2', 'villian3'];
    villians.forEach(v => console.log(v.toUpperCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAuido = AudioLevel.medium;
    console.log(currentAuido);
})();
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error('Help me');
})();
(() => {
    let nothing = undefined;
    let isActive = undefined;
    let show = null;
    console.log(nothing);
})();
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians)
        console.log('There are problems');
    else
        console.log('We are ok');
    avengers = Number('55A');
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let PowerHeroes;
    (function (PowerHeroes) {
        PowerHeroes[PowerHeroes["flash"] = 5] = "flash";
        PowerHeroes[PowerHeroes["superman"] = 100] = "superman";
        PowerHeroes[PowerHeroes["batman"] = 1] = "batman";
        PowerHeroes[PowerHeroes["aquaman"] = 0] = "aquaman";
    })(PowerHeroes || (PowerHeroes = {}));
    const fuerzaFlash = PowerHeroes.flash;
    const fuerzaSuperman = PowerHeroes.superman;
    const fuerzaBatman = PowerHeroes.batman;
    const fuerzaAcuaman = PowerHeroes.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    var _a;
    const batman = 'Batman';
    const superman = "Superman";
    const black = `black hero`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'He is not');
})();
(() => {
    const hero = ['Dr Strange', 100, false];
    hero[0] = 'Hi';
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map