(() => {
    const error = (message: string):(never | number) => {

        // when the function is never, it always return something or an error or may another value
        throw new Error(message);
    }

    error( 'Help me' );
})();