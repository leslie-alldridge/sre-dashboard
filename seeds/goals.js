exports.seed = function(knex, Promise) {
  return knex("goals")
    .del()
    .then(function() {
      return knex("goals").insert([
        {
          id: 1,
          area: "Latency",
          healthy: 90,
          low: 120,
          high: 200
        },
        {
          id: 2,
          area: "Traffic",
          healthy: 600,
          low: 650,
          high: 720
        },
        {
          id: 3,
          area: "Errors",
          healthy: 1.8,
          low: 2,
          high: 2.5
        },
        {
          id: 4,
          area: "Saturation",
          healthy: 40,
          low: 55,
          high: 65
        }
      ]);
    });
};
