var db = require('../../database/models');
const Promise = require('bluebird');

module.exports = {

  getAvailableRuns: (req, res, next) => {
    // gets all available runs (no runner id)
    return db.Runs.getAllAvailableRuns()
    .then((runs) => {
      res.runs = runs;
      next();
    });
  },

  getStartedRuns: (req, res, next) => {
    // NEEDS DB FUNCTION THAT GETS STARTED RUNS
    next();
  },

  getFinishedRuns: (req, res, next) => {
    // gets all runs that have been finished (finished status)
    return db.Runs.getAllFinishedRuns()
    .then((runs) => {
      res.runs = runs;
      next();
    });
  },

  editRun: (req, res, next) => {
    // Just in case user wants to edit details of run
    // DOES NOT CHANGE STATUS
    next();
  },

  updateRun: (req, res, next) => {
    // if no run exists
      // creates run
      // (db.Runs.create(req.run))
    // if run exists with available status
      // sets run to started
    // if run exists with started status
      // sets run to finished
        // (db.Runs.finishRun(req.run))
    next();
  }

};