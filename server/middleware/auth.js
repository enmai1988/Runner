var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

// NEED TO GET APP KEY FOR THIS FILE
var config = require('../config/config.js');

passport.use(new Strategy({
  clientID: config.FB_ID,
  clientSecret: config.FB_SECRET,
  callbackURL: '/login/facebook/return'
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});