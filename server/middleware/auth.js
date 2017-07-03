var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var db = require('../../database/models');
const Promise = require('bluebird');

// NEED TO GET APP KEY FOR THIS FILE
var config = require('../config/config.js');

passport.use(new Strategy({
  clientID: process.env.RUNNER_ID || config.FB_ID,
  clientSecret: process.env.RUNNER_SECRET || config.FB_SECRET,
  profileFields: ['id', 'displayName', 'emails', 'profileUrl', 'name', 'gender', 'picture.type(large)'],
  callbackURL: '/login/facebook/return'
  //callbackURL: 'https://effective-elephants-runner.herokuapp.com/login/facebook/return'
},
function(accessToken, refreshToken, profile, cb) {
  // console.log('PROFILE:');
  // console.log(profile);
  profile = {
    fbId: profile.id,
    displayName: profile.displayName,
    email: profile.emails.length ? profile.emails[0].value : null,
    gender: profile.gender,
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
    profilePic: profile.photos.length ? profile.photos[0].value : null,
    profileUrl: profile.profileUrl
  };

  return db.Users.get(profile)
  .then((res) => {
    console.log('USER in DB');
    console.log(res);
    if (res.length) {
      throw res[0];
    } else {
      return db.Users.create(profile);
    }
  })
  .then((res) => {
    throw db.Users.get(profile);
  })
  .catch((user) => {
    // currently gets error because the schema
    // does not have the same properties as profile
    if (user.fbId) {
      return cb(null, user);
    } else {
      console.log('ERROR occured checking if user exists');
      return cb(null, profile);
    }
  });

}));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = {
  VerifyLogin: (req, res, next) => {
    console.log(req.user);
    if (req.user) {
      next();
    } else {
      res.redirect('/login');
    }
  },
  VerifyLogout: (req, res, next) => {
    if (!req.user) {
      next();
    } else {
      res.redirect('/');
    }
  }
};