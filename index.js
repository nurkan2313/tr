const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./src/routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(6060, () => {
    console.log(`App running on port 6060`)
})


