var db = require('../../database/models');
const Promise = require('bluebird');
var _ = require('underscore');
// add user is done in Auth!

module.exports = {

  mapUser: (req, res, next) => {
    // maps user post request to the body
    if (Object.keys(req.body).length) {
      req.userinfo = req.body.obj;
      next();
    } else {
      res.send('BAD REQUEST');
    }
  },

  update: (req, res, next) => {
    // should edit missing user info after sign up page
    // console.log('USER: ', req.user);
    // console.log('NEW INFO', req.userinfo);
    _.extend(req.user, req.userinfo);
    db.Users.updateUserInfo(req.user)
    .then(() => {
      next();
    });
  },

  like: (req, res, next) => {

    // REQUEST SHOULD BE IN FORM OF { fbId: 'runnerId' }
    db.Users.addLike(req.userinfo)
    .then(() => {
      next();
    });
  },

  dislike: (req, res, next) => {
    db.Users.addDislike(req.userinfo)
    .then(() => {
      next();
    });
  },

  deleteUser: (req, res, next) => {
    // probably don't need this for now
    next();
  }
};