exports.up = function(knex, Promise) {
  return knex.schema.createTable("goals", table => {
    table.increments("id");
    table.string("area");
    table.float("healthy");
    table.float("low");
    table.float("high");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("goals");
};
