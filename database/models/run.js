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
    return db.query(`INSERT INTO RUNS (userId, amount, location, status, title, description, ) values (${runObj.userId}, '${runObj.amount}', '${runObj.location}', '${runObj.status}', '${runObj.title}', '${runObj.description}')`);
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

  updateStatus(runObj, status) {
    // Can we just get the status from the run object instead of passing it as a parameter here?
    let date = new Date();
    let dateStamp = date.toLocaleString();
    if (status === 'finished') {
      return db.query(`UPDATE RUNS SET STATUS = '${status}', finishTime = '${dateStamp}' WHERE id = '${runObj.id}'`);
    } else if (status === 'started') {
      // shouldn't the status be changed to finished here? instead of setting it to started again?
      // also maybe we should add a third if statement for available -> started
      return db.query(`UPDATE RUNS SET STATUS = '${status}', startTime = '${dateStamp}' WHERE id = '${runObj.id}'`);
    }
  }

  updateRun(runObj) {
    return db.query(`UPDATE RUNS SET userId = ${runObj.userId}, location = '${runObj.location}', status = '${runObj.status}', title = '${runObj.title}', description = '${runObj.description}' WHERE title = '${runObj.title}'`);
  }

}

module.exports = new Runs();