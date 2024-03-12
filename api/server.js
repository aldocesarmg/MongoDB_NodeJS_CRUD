const express = require('express');

const app = express();

app.get('/home', (req, res) => {
    res.send('This is the response from server.')
})

module.exports = app;