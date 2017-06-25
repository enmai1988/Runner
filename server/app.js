var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var util = require('./middleware');
var passport = require('passport');

var app = express();

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/login', express.static(path.join(__dirname, '/../client/public/login')));

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.use('/',
  require('connect-ensure-login').ensureLoggedIn(),
  express.static(path.join(__dirname, '/../client/public/index')));


module.exports = app;