"use strict";
(() => {
    function callBatman() {
        //return 1; //Error, we can not return anything
        return; //we can do this, return undefined
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman(); // void = empty, if the function doesn't return anything, it returns undefined  
    console.log(a);
})();
