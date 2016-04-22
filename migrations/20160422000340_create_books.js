
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary();
    table.string('title');
    table.dateTime('published_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books');
};
