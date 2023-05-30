(() => {
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string) => `Hi ${name}`;
    const saveTheWorld = () => `We are working on it!`

    //let myFunction: Function;
    // function that return a number
    let myFunction1: (y: number, z: number) => number;
    let myFunction2: (x:string) => string;
    let myFunction3: () => string;

    myFunction1 = addNumbers;
    myFunction2 = greet;
    myFunction3 = saveTheWorld;

})();