const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
    console.log('hi');
});

module.exports = app;