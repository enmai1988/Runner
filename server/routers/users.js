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

router.post('/like', util.User.like, (req, res) => {
  res.send('Liked!');
});

router.post('/dislike', util.User.dislike, (req, res) => {
  res.send('Disliked!');
});
  // GET routes

router.get('/info/fb', (req, res) => {
  res.send(req.user);
});

router.get('/info', (req, res) => {
  res.send(req.user);
});

module.exports = router;