"use strict";
(() => {
    const fullName = (...rest) => {
        return `${rest.join(' ')}`;
    };
    const superman = fullName('Daniel', 'Flores', 'Orozco');
    console.log(superman); // Daniel Flores Orozco
})();
//# sourceMappingURL=args-rest.js.map