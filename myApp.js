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
    var message;
    if (process.env.MESSAGE_STYLE == "uppercase") {
      message = "Hello json".toUpperCase();
    } else {
      message = "Hello json";
    }
    res.json(message);
});

module.exports = app;
