// If you want to install some library that was not built with typescript
// we must install the packages @types/[library-name] ->Example: npm i --save-dev @types/express

import express from 'express';

const app = express()
const port = 3000;

app.get('/', (req, res) => {

    res.status(401).json({
        ok: false,
        msg: 'Token is required'
    })
});

app.listen(port, () => {
    console.log('Server is running on port: ', port);
})