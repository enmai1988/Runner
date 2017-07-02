var pg = require('pg');
const Model = require('./model');
const Promise = require('bluebird');
const db = require('../index.js');
var http = require('http');

console.log('in models/user.js')

class Users extends Model {
  constructor() {
    super('users');
  }

  checkIfUserExists(userObj) {
    return db.query(`SELECT * FROM users WHERE fbId = '${userObj.fbId}'`);
  }

  create(userObj) {
    return db.query(`INSERT INTO USERS (fbId, firstName, lastName, displayName, gender, profilePic, profileUrl, location, phone, email) values ('${userObj.fbId}', '${userObj.firstName}', '${userObj.lastName}', '${userObj.displayName}', '${userObj.gender}', '${userObj.profilePic}', '${userObj.profileUrl}', '${userObj.location}', '${userObj.phone}', '${userObj.email}')`);
  }

  getPropFromUser(userObj, prop) {
    //get id, rating, etc. from user info
    return db.query(`SELECT ${prop} FROM USERS WHERE fbId = '${userObj.fbId}'`)
  }

  addLike(userObj, rating) {
    let newRating = rating += 1;
    return db.query(`UPDATE USERS SET RATING = ${newRating} WHERE fbId = '${userObj.fbId}'`)
  }

  addDislike(userObj, rating) {
    let newRating = rating -= 1;
    return db.query(`UPDATE USERS SET RATING = ${newRating} WHERE fbId = '${userObj.fbId}'`)
  }

  updateUserInfo(userObj) {
    return db.query(`UPDATE USERS SET fbId = '${userObj.fbId}', firstName = '${userObj.firstName}', lastName = '${userObj.lastName}', displayName = '${userObj.displayName}', gender = '${userObj.gender}', profilePic = '${userObj.profilePic}', profileUrl = '${userObj.profileUrl}', location = '${userObj.location}', phone = '${userObj.phone}', email = '${userObj.email}' WHERE id = '${userObj.id}'`);
  }

}

module.exports = new Users();