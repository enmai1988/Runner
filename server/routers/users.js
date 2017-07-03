var express = require('express');
var router = express.Router();
var util = require('../middleware');

// router for users

  // POST routes

router.post(util.User.mapUser);

router.post('/info', util.User.update, (req, res) => {
  res.send('Updated successfully');
});

router.post('/signup', util.User.update, (req, res) => {
  res.send('Updates successfully');
});

  // GET routes

router.get('/info/fb', (req, res) => {
  res.send(req.user);
});

router.get('/info', (req, res) => {
  res.send(req.user);
});

module.exports = router;