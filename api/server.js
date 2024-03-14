const express = require('express');
const port = 3000;

const mongoCRUD = require('../util/mongoCRUD');

const app = express();

app.get('/home', (req, res) => {
    res.send('This is the response from server.')
})

app.get('/getListings', (req, res) => {
    res.json();
})

module.exports = { app, port };