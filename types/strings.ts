(() => {
    const batman: string = 'Batman';
    const superman: string = "Superman";
    const black: string = `black hero`;

    console.log(`I'm ${batman}`);

    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'He is not');

})();