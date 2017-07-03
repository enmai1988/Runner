var app = require('./app.js');
var startDB = require('../database');


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
