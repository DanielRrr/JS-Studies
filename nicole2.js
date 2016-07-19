var request = require('request');


request({
    url: 'http://nicolecamus.tumblr.com/',
    qs: {from: 'blog example', time: +new Date()},
    method: 'GET',
    headers: {
        'Content-Type': 'MyContentType',
        'Custom-Header': 'Custom Value'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    }
});
