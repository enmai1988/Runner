var pg = require('pg');
const Model = require('./model');
const Promise = require('bluebird');
const db = require('../index.js');
var http = require('http');

console.log('in models/user.js');

class Users extends Model {
  constructor() {
    super('USERS');
  }

  get(userObj) {
    return db.query(`SELECT * FROM USERS WHERE fbid = '${userObj.fbid}'`);
  }

  create(userObj) {
    return db.query(`INSERT INTO USERS (fbid, firstname, lastname, displayname, gender, profilepic, profileurl, location, phone, email) values ('${userObj.fbid}', '${userObj.firstname}', '${userObj.lastname}', '${userObj.displayname}', '${userObj.gender}', '${userObj.profilepic}', '${userObj.profileurl}', '${userObj.location}', '${userObj.phone}', '${userObj.email}')`);
  }

  getPropFromUser(userObj, prop) {
    //get id, rating, etc. from user info
    return db.query(`SELECT ${prop} FROM USERS WHERE fbid = '${userObj.fbid}'`);
  }

  addLike(userObj) {
    return this.get(userObj)
    .then((user) => {
      let newRating = user.rating + 1;
      return db.query(`UPDATE USERS SET RATING = ${newRating} WHERE fbid = '${user.fbid}'`);
    });
  }

  addDislike(userObj) {
    return this.get(userObj)
    .then((user) => {
      let newRating = user.rating - 1;
      newRating = newRating < 0 ? 0 : newRating;
      return db.query(`UPDATE USERS SET RATING = ${newRating} WHERE fbid = '${user.fbid}'`);
    });
  }

  updateUserInfo(userObj) {
    return db.query(`UPDATE USERS SET fbid = '${userObj.fbid}', firstname = '${userObj.firstname}', lastname = '${userObj.lastname}', displayname = '${userObj.displayname}', gender = '${userObj.gender}', profilepic = '${userObj.profilepic}', profileurl = '${userObj.profileurl}', location = '${userObj.location}', phone = '${userObj.phone}', email = '${userObj.email}' WHERE id = '${userObj.id}'`);
  }

}

module.exports = new Users();