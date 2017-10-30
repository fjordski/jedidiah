var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/media', function(req, res, next) {
  res.render('media');
});

router.get('/join', function(req, res, next) {
  res.render('join');
});


module.exports = router;
