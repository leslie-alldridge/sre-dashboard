const express = require("express");
const router = express.Router();

const goalsDB = require("./db/goals");

router.get("/all", (req, res) => {
  goalsDB.getGoals().then(data => {
    res.json(data);
  });
});

router.post("/save", (req, res) => {
  const { area, section, value } = req.body;
  goalsDB.saveGoals(area, section, value).then(data => {
    res.json(data);
  });
});

module.exports = router;
