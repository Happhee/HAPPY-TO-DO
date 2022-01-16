const express = require('express');
const bodyParser = require('body-parser');
const config = require('./app/config/config.js');
const mongoose = require('mongoose');
const app = express();
const port = 4000

app.use(bodyParser.json());
mongoose.connect(config.url, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
    console.log('connected to mongodb server')
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('http://localhost:' + port);
})