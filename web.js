var express = require('express');
var app = express.createServer(express.logger());
var fs = require('fs');
var buf = fs.readFileSync("index.html");
var msg = buf.toString()

app.get('/', function(request, response) {
  response.send(msg);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
