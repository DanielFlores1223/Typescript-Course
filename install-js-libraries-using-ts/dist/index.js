"use strict";
// If you want to install some library that was not built with typescript
// we must install the packages @types/[library-name] ->Example: npm i --save-dev @types/express
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.status(401).json({
        ok: false,
        msg: 'Token is required'
    });
});
app.listen(port, () => {
    console.log('Server is running on port: ', port);
});
