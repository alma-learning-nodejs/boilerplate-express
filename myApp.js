var express = require('express');
var app = express();

/*app.get('/', (req, res) => {
    res.send('Hello Express');
});*/

function logger(req, res, next) {
    console.log("%s %s - %s", req.method, req.path, req.ip);
    next();
}

app.use(logger);

app.use("/public", express.static(__dirname + "/public"));

absoluteIndexPath = __dirname + '/views/index.html';

app.get('/', (req, res) => {
    res.sendFile(absoluteIndexPath);
});

app.get("/json", (req, res) => {
    res.json({"message": "Hello json"});
});

module.exports = app;
