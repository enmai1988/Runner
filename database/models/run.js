const Model = require('./model');
const Users = require('./user');
const db = require('../index.js');
var pg = require('pg');
const Promise = require('bluebird');

console.log('in models/run.js');

class Runs extends Model {
  constructor() {
    super('RUNS');
  }

  create(runObj) {
    console.log('RUN OBJ', runObj);
    return db.query(`INSERT INTO RUNS (userId, amount, location, status, title, description, startTime, expectedFinishTime) values (${runObj.userId}, '${runObj.payout}', '${runObj.location}', '${runObj.status}', '${runObj.title}', '${runObj.description}', '${runObj.startTime}', '${runObj.expectedFinishTime}');`);
  }

  getAllRunsWithUserId(userId) {
    return db.query(`SELECT amount, location, status, title, description FROM RUNS WHERE userId = '${userId}'`);
  }

  getAllRunsWithStatus(status, userId) {
    if (!userId) {
      return db.query(`SELECT amount, location, status, title, description FROM RUNS WHERE status = '${status}'`);
    } else {
      return db.query(`SELECT amount, location, status, title, description FROM RUNS WHERE status = '${status}' AND id = '${userId}'`);
    }
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
      return db.query(`UPDATE RUNS SET status = 'active', startTime = '${dateStamp}' WHERE id = '${runObj.id}'`);
    } else if (runObj.status === 'active') {
      return db.query(`UPDATE RUNS SET status = 'finished', finishTime = '${dateStamp}' WHERE id = '${runObj.id}'`);
    }
  }

  updateRun(runObj) {
    return db.query(`UPDATE RUNS SET userId = ${runObj.userId}, runnerId = ${runObj.userId}, amount = '${runObj.userId}', location = '${runObj.location}', status = '${runObj.status}', title = '${runObj.title}', description = '${runObj.description}', expectedFinishTime = '${runObj.expectedFinishTime}', startTime = '${runObj.startTime}', finishTime = '${runObj.finishTime}', WHERE title = '${runObj.title}'`);
  }

}

module.exports = new Runs();