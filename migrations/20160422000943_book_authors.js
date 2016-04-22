
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book_authors', function(table) {
    table.increments('id').primary();
    table.integer('author_id').notNullable().references('id').inTable('authors').onDelete('CASCADE');
    table.integer('book_id').notNullable().references('id').inTable('books').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {

};
