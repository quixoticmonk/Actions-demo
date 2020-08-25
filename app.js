var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var routes = require("./routes/routes.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});