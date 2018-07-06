const express = require('express')
const bodyParser = require('body-parser')
const controller = require('./controller.js');
const massive = require('massive');
require('dotenv').config()

const app = express();

app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance)
})

app.get('/api/inventory')


const port = 3001;
app.listen(port, () => { console.log(`Server listening on port ${port}`) })