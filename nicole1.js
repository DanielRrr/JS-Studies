var request = require('request');

request('http://nicolecamus.tumblr.com/', function (error, response, body) {
    if(error){
        return console.log('Error:', error);
    }

    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }


    console.log(body);

});
