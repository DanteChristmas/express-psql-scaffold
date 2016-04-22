(function () {
  'use strict';

  var express = require('express');
  var path = require('path');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');

  var routes = require('./routes/index');
  var apiRoutes = require('./routes/api');

  var app = express();
  //comment
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());

  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.use('/api', apiRoutes);
  app.use('/', routes);

  app.set('port', process.env.PORT || 3000);

  var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
  });

  module.exports = app;
}());
