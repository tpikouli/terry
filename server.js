var express = require("express");

var app = express();

app.use(express.static('public'));

const fs = require('fs');
const obj = JSON.parse(fs.readFileSync('./configuration.json', 'utf8'));

const objPretty = JSON.stringify(obj,null,2);  

app.get('/info', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(objPretty);
  console.log(obj)
  
});

var server = app.listen(9005, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});