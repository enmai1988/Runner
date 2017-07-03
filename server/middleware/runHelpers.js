var db = require('../../database/models');
const Promise = require('bluebird');

module.exports = {

  mapRun: (req, res, next) => {
    // maps body to run object if it exists
    // console.log('RUN: ', req.body);
    if (Object.keys(req.body).length) {
      req.run = req.body;
      next();
    }
  },

  getId: (req, res, next) => {
    console.log('QUERY: ', req.query);
    if (req.query) {
      req.userId = req.query;
    }
    console.log('USER: ', req.user);
    next();
  },

  getUserRuns: (req, res, next) => {
    db.Runs.getAllRunsWithUserId(req.userId)
    .then((runs) => {
      res.runs = runs;
      next();
    });
  },

  getAvailableRuns: (req, res, next) => {
    // gets all available runs (no runner id)
    return db.Runs.getAllRunsWithStatus('available')
    .then((runs) => {
      res.runs = runs;
      next();
    });
  },

  getStartedRuns: (req, res, next) => {
    // NEEDS DB FUNCTION THAT GETS STARTED RUNS
    return db.Runs.getAllRunsWithStatus('active', req.userId)
    .then((runs) => {
      res.runs = runs;
      next();
    });
  },

  getFinishedRuns: (req, res, next) => {
    // gets all runs that have been finished (finished status)
    return db.Runs.getAllRunsWithStatus('finished', req.userId)
    .then((runs) => {
      res.runs = runs;
      next();
    });
  },

  editRun: (req, res, next) => {
    // Just in case user wants to edit details of run
    // DOES NOT CHANGE STATUS
    db.Runs.updateRun(req.run)
    .then(() => {
      next();
    });
  },

  updateRun: (req, res, next) => {
    return Promise.resolve(req.run.id)
    .then((exists) => {
      if (!exists) {
        return db.Runs.create(req.run);
      } else {
        throw req.run;
      }
    })
    .catch((run) => {
      return db.Runs.updateStatus(run);
    })
    .then(() => {
      next();
    });
  }

};