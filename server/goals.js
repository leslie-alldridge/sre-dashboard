const express = require("express");
const router = express.Router();

const goalsDB = require("./db/goals");

router.get("/all", (req, res) => {
  goalsDB.getGoals().then(data => {
    res.json(data);
  });
});

module.exports = router;
