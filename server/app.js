var express  = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var util = require('./middleware');


var app = express();

app.use(express.static(path.join(__dirname, '/../client/public')));

// app.get('/login', (req, res) => {
//   res.send('HI');
// });


module.exports = app;