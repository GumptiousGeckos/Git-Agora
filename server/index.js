var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;


var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(port, function() {
  console.log('listening on port', port);
});