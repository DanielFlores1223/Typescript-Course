(() => {

    function callBatman(): void {

        //return 1; //Error, we can not return anything
        return; //we can do this, return undefined
    }

    const callSuperman = ():void => {
        return;
    }

    const a = callBatman(); // void = empty, if the function doesn't return anything, it returns undefined  
    console.log(a);

})();