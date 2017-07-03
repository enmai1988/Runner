var express = require('express');
var router = express.Router();
var util = require('../middleware');


// router for runs

  // POST routes

router.post('*', util.Runs.mapRun);

router.post('/accept', util.Runs.updateRun, (req, res, next) => {
  res.send('Updated');
});

router.post('/start', util.Runs.updateRun, (req, res, next) => {
  // res.redirect('/');
  res.send('Created');
});

// router.post('/update', util.Runs.updateRun, (req, res) => {
//   res.send('Updated successfully');
// });


  // GET routes

router.get('*', util.Runs.getId);

router.get('/user', util.Runs.getUserRuns);

router.get('/available', util.Runs.getAvailableRuns);

router.get('/active', util.Runs.getStartedRuns);

router.get('/completed', util.Runs.getFinishedRuns);

router.get('*', (req, res) => {
  res.send(res.runs);
});



module.exports = router;