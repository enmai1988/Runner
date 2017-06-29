const Model = require('./model');
const Users = require('./user');

class Runs extends Model {
  constructor() {
    super('runs');
  }

  create(runObj) {
    return db.query(`INSERT INTO RUNS (userid, amount, location, status, title, description) values (${runObj.userid}, ${runObj.amount}, ${runObj.location}, ${runObj.status}, ${runObj.title}, ${runObj.description})`);
  }

  getAllAvailableRuns() {
    return db.query(`SELECT amount, location, status, title, description FROM RUNS WHERE status = 'available`);
  }

  getAllFinishedRuns() {
    return db.query(`SELECT amount, location, status, title, description FROM RUNS WHERE status = 'finished`);
  }

  deleteRun(runObj) {
    return db.query(`DELETE FROM RUNS WHERE DESCRIPTION = ${runObj.description}`)
  }

  addRunner(userObj) {
    return db.query(`INSERT INTO RUNS (runnerid) values (SELECT ID FROM USERS WHERE EMAIL = ${userObj.email})`);
  }

  finishRun(runObj) {
    return db.query("UPDATE RUNS SET STATUS = 'finished'")
  }

}

module.exports = new Runs();