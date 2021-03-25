var express = require('express');
var app = express();

/*app.get('/', (req, res) => {
    res.send('Hello Express');
});*/
absoluteIndexPath = __dirname + '/views/index.html';



app.get('/', (req, res) => {
    res.sendFile(absoluteIndexPath);
});

app.use("/public", express.static(__dirname + "/public"));


 module.exports = app;
