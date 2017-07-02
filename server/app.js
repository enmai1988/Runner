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

// routes for runs
app.route('/runs')

  // POST routes

  .post(util.Runs.mapRun)

  .post('/accept', (req, res) => {
    res.redirect('/runs/update');
  })

  .post('/start', (req, res) => {
    res.redirect('/runs/update');
  })

  .post('/update', util.Runs.updateRun, (req, res) => {
    res.send('Updated successfully');
  })


  // GET routes

  .get('/user', util.Runs.getUserRuns)

  .get('/available', util.Runs.getAvailableRuns)

  .get('/active', util.Runs.getStartedRuns)

  .get('/completed', util.Runs.getFinishedRuns)

  .get((req, res) => {
    res.send(res.runs);
  });


app.route('/user')

  // POST routes

  .post(mapUser)

  .post('/info', (req, res) => {
    
  })

  .post('/signup', (req, res) => {

  })

  // GET routes

  .get('/info/fb', (req, res) => {
    res.send(req.user);
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