(function() {
  'use strict';

  var config = require('../knexfile.js'),
    knex = require('knex')(config[process.env.NODE_ENV]);

  module.exports = knex;

  knex.migrate.latest([config]);
}());
