"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'stroght']
    };
    // ts creates a new type, an object with these props (name, age, powers)
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super stronght', 'fly'],
        getName() {
            return this.name;
        }
    };
})();
//# sourceMappingURL=objects.js.map