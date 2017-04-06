var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.listen(3000);