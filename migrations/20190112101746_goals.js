exports.up = function(knex, Promise) {
  return knex.schema.createTable("goals", table => {
    table.increments("id");
    table.string("area");
    table.integer("healthy");
    table.integer("low");
    table.integer("high");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("goals");
};
