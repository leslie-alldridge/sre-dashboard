const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = {
  getGoals,
  saveGoals
};

function getGoals(testDb) {
  const connection = testDb || knex;
  return connection("goals").select();
}

function saveGoals(area, section, value, testDb) {
  if (section == "healthy") {
    const connection = testDb || knex;
    return connection("goals")
      .where({ area: area })
      .update({ healthy: value })
      .then(data => {
        return connection("goals").select();
      });
  } else if (section == "low") {
    const connection = testDb || knex;
    return connection("goals")
      .where({ area: area })
      .update({ low: value })
      .then(data => {
        return connection("goals").select();
      });
  } else {
    const connection = testDb || knex;
    return connection("goals")
      .where({ area: area })
      .update({ high: value })
      .then(data => {
        return connection("goals").select();
      });
  }
}
