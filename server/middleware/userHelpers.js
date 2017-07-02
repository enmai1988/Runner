var db = require('../../database/models');
const Promise = require('bluebird');
// add user is done in Auth!

module.exports = {

  mapUser: (req, res, next) => {
    // maps user post request to the body
    if (Object.keys(req.body).length) {
      req.userinfo = req.body;
      next();
    }
  },

  editUser: (req, res, next) => {
    // should edit missing user info after sign up page
    db.Users.updateUserInfo(req.userinfo)
    .then(() => {
      next();
    });
  },
  deleteUser: (req, res, next) => {
    // probably don't need this for now
    next();
  }
};