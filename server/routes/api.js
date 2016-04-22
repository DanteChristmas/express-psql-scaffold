(function() {
  'use strict';

  var express = require('express'),
    router = express.Router(),
    knex = require('../db');


  router.get('/books', function(req, res) {
    knex('books')
      .select('books.id',
        'books.title',
        'authors.first_name as first',
        'authors.last_name as last'
      )
      .leftJoin('book_authors', 'books.id', 'book_authors.book_id')
      .leftJoin('authors', 'book_authors.author_id', 'authors.id')
    .then(function(books) {
      debugger;
      res.json(books);
    }).catch(function(err) {
      console.error(err);
    });
  });

  router.get('/authors', function(req, res) {
    knex('authors').then(function(authors) {
      res.json(authors);
    }).catch(function(err) {
      console.error(err);
    });
  });

  module.exports = router;
}());
