var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos/import', function (req, res) {
  
    var options = {
      url:`https://api.github.com/users/$(req.body.username)/repos`,
      headers: {
        'User-Agent': 'request'
      },
      auth: {
        'user': 'ebeedle',
        'pass': '5b8239fe3a64eeb5c095b1ce7447a9ed5c29843d'
      }
    };
    
    function  callback(error, response, body) {
      console.log(body);
    }

    request(options, callback);
    //do a get request to github to get user's repos using their username
    //store this infor in a database
});

app.get('/repos', function (req, res) {
  // get user's repos from database;
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

//5b8239fe3a64eeb5c095b1ce7447a9ed5c29843d
