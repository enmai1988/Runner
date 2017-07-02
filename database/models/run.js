const Model = require('./model');
const Users = require('./user');
const db = require('../index.js');
var pg = require('pg');
const Promise = require('bluebird');

console.log('in models/run.js');

class Runs extends Model {
  constructor() {
    super('runs');
  }

  create(runObj) {
    return db.query(`INSERT INTO RUNS (userId, amount, location, status, title, description, expectedFinishTime) values (${runObj.userId}, '${runObj.amount}', '${runObj.location}', '${runObj.status}', '${runObj.title}', '${runObj.description}', '${runObj.expectedFinishTime}')`);
  }

  getAllRunsWithUserId(userId) {
    return db.query(`SELECT amount, location, status, title, description FROM RUNS WHERE userId = '${userId}'`);
  }

  getAllRunsWithStatus(status) {
    return db.query(`SELECT amount, location, status, title, description FROM RUNS WHERE status = '${status}'`);
  }

  deleteRun(runObj) {
    return db.query(`DELETE FROM RUNS WHERE DESCRIPTION = '${runObj.description}'`);
  }

  addRunner(runObj, userId) {
    return db.query(`UPDATE RUNS SET runnerid = ${userId} WHERE description = '${runObj.description}'`);
  }

  updateStatus(runObj) {
    let date = new Date();
    let dateStamp = date.toLocaleString();
    if (runObj.status === 'available') {
      return db.query(`UPDATE RUNS SET STATUS = 'started', startTime = '${dateStamp}' WHERE id = '${runObj.id}'`);
    } else if (runObj.status === 'started') {
      return db.query(`UPDATE RUNS SET STATUS = 'finished', finishTime = '${dateStamp}' WHERE id = '${runObj.id}'`);
    }
  }

  updateRun(runObj) {
    return db.query(`UPDATE RUNS SET userId = ${runObj.userId}, runnerId = ${runObj.userId}, amount = '${runObj.userId}', location = '${runObj.location}', status = '${runObj.status}', title = '${runObj.title}', description = '${runObj.description}', expectedFinishTime = '${runObj.expectedFinishTime}', startTime = '${runObj.startTime}', finishTime = '${runObj.finishTime}', WHERE title = '${runObj.title}'`);
  }

}

module.exports = new Runs();