(function() {
  'use strict';

  var express = require('express'),
    router = express.Router(),
    knex = require('../db');


  router.get('/books', function(req, res) {
    knex('books')
      .innerJoin('book_authors', 'books.id', 'book_authors.book_id')
      .innerJoin('authors', 'book_authors.author_id', 'authors.id')
      .select('books.id',
        'books.title',
        knex.raw('GROUP_CONCAT(??.?? as ??)',
        ['authors', 'last_name', 'stuff'])
      )


      // .select('authors.id', 'authors.first_name', 'authors.last_name')
    .then(function(books) {
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
