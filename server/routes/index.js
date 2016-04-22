(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();

  router.get('/', function(req, res) {
    res.render('dist/index');
  });

  module.exports = router;
}());
