const express = require('express');
const connectDB = require('./DB/connection')
const app = express();

connectDB();

const port = process.env.Port || 3000;

app.use('/', require('./routes'))

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})