"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return text.length > 3;
    };
    Validation.validateDate = (myDate) => {
        return isNaN(myDate.valueOf());
    };
})(Validation || (Validation = {}));
console.log(Validation.validateText("Fer"));
//# sourceMappingURL=main.js.map