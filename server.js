var express = require('express');
var app = express();
var fs = require("fs");

var user = {
  "user6" : {
    "name" : "Ian",
       "password" : "654321",
       "profession" : "Studio Piano",
       "id" : 6
  }
}

app.get('/addUser', function (req, res) {
  fs.readFile ( __dirname + "/" + "users.json", 'utf-8', function (err, data) {
    data = JSON.parse( data );
    data["user6"] = user["user6"];
    console.log( data );
    res.end( JSON.stringify(data));
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("App runs at http://%s:%s", host, port);
})
