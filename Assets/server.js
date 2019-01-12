// grab the packages we need
var express = require('express');
var path = require("path");
var app = express();
var port = process.env.PORT || 8080;

// routes will go here

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Create format for reserved table
var reservations = [
    {
      ID: "yoda",
      name: "Yoda",
      email: "JediMaster@Hotmail.com",
      phone: 900-891-4028
    }
];



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "Index.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });