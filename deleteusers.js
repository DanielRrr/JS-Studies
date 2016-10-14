var express = require('express');
var app = express();
var fs = require("fs");

var id = 3;

app.get('/deleteUser', function (req, res) {
  fs.readFile( __dirname + "/" + "users.json", 'utf-8', function (err, data) {
    data = JSON.parse( data );
    delete data["user" + 3];

    console.log( data );
    res.end( JSON.stringify(data));
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("App runs att http://%s:%s", host, port);
})
