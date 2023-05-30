(() => {
    let flash: { name: string, age: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['speed', 'stroght']
    }

    // ts creates a new type, an object with these props (name, age, powers)
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super stronght', 'fly'],
        getName(): string {
            return this.name;
        }
    }
})();