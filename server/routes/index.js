(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();
  // var mongojs = require('mongojs');
  // var db = mongojs('myApp', ['myCollections']);

  router.get('/', function(req, res) {
    res.render('dist/index');
  });

  module.exports = router;
}());
