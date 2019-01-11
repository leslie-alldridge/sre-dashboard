const express = require("express");
const router = express.Router();

router.get("/all", (req, res) => {
  console.log("hit the route finally");
});

module.exports = router;
