"use strict";
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
