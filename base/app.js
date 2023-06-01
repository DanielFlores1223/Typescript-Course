"use strict";
const message = 'Hello world!!!';
const hero = {
    name: 'Ironman',
    age: 45
};
hero.age = 50;
console.log(message);
console.log(hero.age);
// error if the param is any, it's important this rule!
function sayHello(message) {
    message.trim();
}
//# sourceMappingURL=app.js.map