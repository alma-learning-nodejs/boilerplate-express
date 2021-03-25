var express = require('express');
var app = express();

/*app.get('/', (req, res) => {
    res.send('Hello Express');
});*/
absolutePath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
});

 module.exports = app;
