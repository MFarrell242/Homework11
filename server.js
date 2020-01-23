var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var handlebar = require("express-handlebars");

app.engine("handlebars", handlebar({defaultLayout: "main"}));
app.search("view engine", "handlebars");

var routes = require("./controllers/burgCon.js");

app.use(routes);

app.listen(PORT, ()=>{
    console.log("Server listening on localhost:" + PORT);
});