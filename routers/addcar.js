const express = require("express");
const router = express.Router();
const addCarCont = require("../controllers/addcar");

router.use((req, res, next) => {
  req.app.set("addcar");
  next();
});

router.get("/", addCarCont.index);

module.exports = router;