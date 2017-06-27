var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var util = require('./middleware');
var passport = require('passport');

var app = express();

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, '/../client/public/assets')));

// Authentication part
//////////////////////////////////////////////////////////////////////////////
app.use('/login', util.Auth.VerifyLogout, express.static(path.join(__dirname, '/../client/public/login')));

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/return', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

app.use(
  require('connect-ensure-login').ensureLoggedIn(),
  express.static(path.join(__dirname, '/../client/public/index')));

app.get(
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => res.sendFile(path.join(__dirname, '/../client/public/index/index.html')));
//////////////////////////////////////////////////////////////////////////////


// Database routes
//////////////////////////////////////////////////////////////////////////////
// functions that post and get from database should go here
app.post('/startRun', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

//////////////////////////////////////////////////////////////////////////////

module.exports = app;