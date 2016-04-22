(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();

  router.get('/', function(req, res) {
    var hasLiveReload = process.env.NODE_ENV == 'development';
    res.render('dist/index', {hasLiveReload: hasLiveReload});
  });

  module.exports = router;
}());
