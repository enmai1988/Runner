var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var util = require('./middleware');
var passport = require('passport');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'effective elephants', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(path.join(__dirname, '/../client/public/assets')));

// Database routes
//////////////////////////////////////////////////////////////////////////////
// functions that post and get from database should go here

//accepts run data from client and posts to db 
app.post('/startRun', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

//grabs user info from db 
app.get('/userinfo', (req, res) => {
  console.log('USER');
  console.log(req.user);
  res.send(req.user);
});

app.post('/runs', (req, res) => {
  res.send('Posted run');
});

//////////////////////////////////////////////////////////////////////////////

// Authentication part
//////////////////////////////////////////////////////////////////////////////
app.use('/login', util.Auth.VerifyLogout, express.static(path.join(__dirname, '/../client/public/login')));

app.get('/login/facebook',
  passport.authenticate('facebook', { scope: ['email'] }));

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


// Has to go at the end! it returns the same index if logged in for any other addresses
app.use(
  require('connect-ensure-login').ensureLoggedIn(),
  express.static(path.join(__dirname, '/../client/public/index')));

app.get(
  require('connect-ensure-login').ensureLoggedIn(),
  (req, res) => res.sendFile(path.join(__dirname, '/../client/public/index/index.html')));
//////////////////////////////////////////////////////////////////////////////

module.exports = app;