var db = require('../../database/models');
const Promise = require('bluebird');
// add user is done in Auth!

module.exports = {
  editUser: (req, res, next) => {
    // should edit missing user info after sign up page
    db.Users.updateUserInfo(req.user)
    .then(() => {
      next();
    });
  },
  deleteUser: (req, res, next) => {
    // probably don't need this for now
    next();
  }
};