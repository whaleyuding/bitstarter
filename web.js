var express = require('express');

var fs = require('fs');

var buf = require('buffer'); 

var app = express.createServer(express.logger());

fs.readFileSync('index.html');

var string = buf.toString('utf-8')

app.get('/', function(request, response) {
  response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
