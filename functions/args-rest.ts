(() => {
    const fullName = (...rest: string[]) => {
        return `${rest.join(' ')}`
    }

    const superman = fullName('Daniel', 'Flores', 'Orozco')
    console.log(superman) // Daniel Flores Orozco
})()