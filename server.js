const express = require('express');
const connectDB = require('./DB/connection');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

connectDB();

app.use(bodyParser.json());
app.use('/', require('./routes'))


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
    console.log(`Running on port ${port}`)
})