const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller.js');
const massive = require('massive');
require('dotenv').config()

const app = express();

app.use(bodyParser.json())

const port = 3000;
app.listen(port, () => { console.log(`Server listening on port ${port}`) })