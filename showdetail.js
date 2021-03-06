var express = require('express');
var app = express();
var fs = require("fs");


app.get('/:id', function (req, res) {
  fs.readFile ( __dirname + "/" + "users.json", 'utf-8', function (err, data) {
    data = JSON.parse( data );
    var user = data["user" + req.params.id]
    console.log( data );
    res.end( JSON.stringify(data));
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("App runs at http://%s:%s", host, port)
})
