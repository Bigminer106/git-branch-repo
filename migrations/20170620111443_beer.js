
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer', table => {
    table.increments();
    table.text('name').unique().notNullable();
    table.integer('abb').unique().notNullable();
    table.integer('person_id').notNullable();
    table.foreign('person_id').references('person.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('person');
};
