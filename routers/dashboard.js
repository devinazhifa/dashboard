const express = require("express");
const router = express.Router();
const dashboardCont = require("../controllers/dashboard");

router.use((req, res, next) => {
  req.app.set("dashboard");
  next();
});

router.get("/", dashboardCont.index);

module.exports = router;