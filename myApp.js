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

app.get("/json", (req, res) => {
    res.json({"message": "Hello json"});
});


//app.use(express.static('public'));

module.exports = app;
