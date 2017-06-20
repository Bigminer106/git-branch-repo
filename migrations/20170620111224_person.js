
exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', table => {
    table.increments();
    table.text('name').unique().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('person');
};
