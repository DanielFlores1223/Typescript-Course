(() => {
    let avenger: any = 123;
    let exists; //any
    let power;

    avenger = 'Dr Strange';

    // get methods like the variable was a string
    console.log((avenger as string).charAt(0));

    // get methods like the variable was a number
    avenger = 150.232568;
    console.log((<number>avenger).toFixed(2))

})();