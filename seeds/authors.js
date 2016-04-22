
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('book_authors').del(),
    knex('authors').del(),
    knex('books').del()
  )
  .then(function() {
    return Promise.join(
      knex('authors').insert({first_name: "Bob", last_name: "Dole"}).returning('id'),
      knex('authors').insert({first_name: "Bob", last_name: "Saggot"}).returning('id'),
      knex('authors').insert({first_name: "John", last_name: "Denver"}).returning('id'),
      knex('authors').insert({first_name: "Herp", last_name: "Derp"}).returning('id'),
      knex('authors').insert({first_name: "Herpina", last_name: "Derpina"}).returning('id')
    )
  }).then(function(authors) {
    return Promise.join(
      knex('books').insert({title: "title 1", published_date: new Date(1461306677)}).returning('id'),
      knex('books').insert({title: "title 2", published_date: new Date(1471306677)}).returning('id'),
      knex('books').insert({title: "title 3", published_date: new Date(1431306677)}).returning('id'),
      knex('books').insert({title: "title 4", published_date: new Date(1261306677)}).returning('id'),
      knex('books').insert({title: "title 5", published_date: new Date(1161306677)}).returning('id'),
      knex('books').insert({title: "title 6", published_date: new Date(1361306677)}).returning('id'),
      knex('books').insert({title: "title 7", published_date: new Date(1461006677)}).returning('id')
    ).then(function(books) {
      return {
        authors: authors,
        books: books
      };
    });
  }).then(function (data) {
    return Promise.join(
      knex('book_authors').insert({
        author_id: data.authors[0][0],
        book_id: data.books[0][0]
      }),
      knex('book_authors').insert({
        author_id: data.authors[2][0],
        book_id: data.books[1][0]
      }),
      knex('book_authors').insert({
        author_id: data.authors[3][0],
        book_id: data.books[3][0]
      }),
      knex('book_authors').insert({
        author_id: data.authors[4][0],
        book_id: data.books[3][0]
      }),
      knex('book_authors').insert({
        author_id: data.authors[3][0],
        book_id: data.books[4][0]
      }),
      knex('book_authors').insert({
        author_id: data.authors[3][0],
        book_id: data.books[6][0]
      }),
      knex('book_authors').insert({
        author_id: data.authors[0][0],
        book_id: data.books[6][0]
      }),
      knex('book_authors').insert({
        author_id: data.authors[2][0],
        book_id: data.books[6][0]
      })
    );
  });
};
