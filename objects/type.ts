(() => {

    // key ts word, create a new type
    // we can finsht each line with ; or ,
    type Hero = {
        name: string, age: number, powers: string[], getName?: () => string 
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'stroght']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 30,
        powers: [''],
        getName(): string {
            return this.name
        }
    }

})();