(() => {
    type Hero = {
        name: string, age: number, powers: string[], getName?: () => string 
    }

    let myCustomVariable: (string | number | Hero) = 'Fernando';

    myCustomVariable = 20;

    myCustomVariable = {
        name: 'Spiderman',
        age: 21,
        powers: ['']
    }

})();