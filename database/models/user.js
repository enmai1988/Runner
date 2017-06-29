const Model = require('./model');
const db = require('../index.js');
const Promise = require('bluebird');

class Users extends Model {
  constructor() {
    super('users');
  }

  checkIfUserExists(userObj) {
    return db.query(`SELECT * FROM users WHERE username = ${userObj.username}`);
  }

  create(userObj) {
    let timestamp = Date.now();
    return db.query(`INSERT INTO USERS (userName, name, picture, location, phone, email) values (${userObj.userName}, ${userObj.name}, ${userObj.picture}, ${userObj.location}, ${userObj.phone}, ${userObj.email})`);
  }

  getPropFromUser(userObj, prop) {
    //get id, rating, etc. from user info
    return db.query(`SELECT ${prop} FROM USERS WHERE email = ${userObj.email}`)
  }

  addLike(userObj, rating) {
    let newRating = rating++;
    return db.query(`UPDATE USERS SET RATING TO ${newRating} WHERE email = ${userObj.email}`)
  }

  addDislike(userObj, rating) {
    let newRating = rating--;
    return db.query(`UPDATE USERS SET RATING TO ${newRating} WHERE email = ${userObj.email}`)
  }

}

module.exports = new Users();