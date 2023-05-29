(() => {

    let avengers: number = 10;

    const villians: number = 20;

    if(avengers < villians)
        console.log('There are problems')
    else 
        console.log('We are ok')

    // NaN it's a "number" on javascript
    avengers = Number('55A'); // NaN

})();