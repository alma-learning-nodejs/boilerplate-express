var express = require('express');
var app = express();

/*app.get('/', (req, res) => {
    res.send('Hello Express');
});*/

app.use("/public", express.static(__dirname + "/public"));

absoluteIndexPath = __dirname + '/views/index.html';



app.get('/', (req, res) => {
    res.sendFile(absoluteIndexPath);
});




 module.exports = app;
