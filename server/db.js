(function() {
  'use strict';

  var config = require('../knexfile.js'),
    knex = require('knex')(config[process.env.env]);

  module.exports = knex;

  knex.migrate.latest([config]);
}());
