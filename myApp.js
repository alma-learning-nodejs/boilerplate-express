var express = require('express');
var app = express();

/*app.get('/', (req, res) => {
    res.send('Hello Express');
});*/
absoluteIndexPath = __dirname + '/views/index.html';

app.use(__dirname + '/public',express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(absoluteIndexPath);
});




 module.exports = app;
