const express = require("express");
const router = express.Router();
const listCarCont = require("../controllers/listcar");

router.use((req, res, next) => {
  req.app.set("listcar");
  next();
});

router.get("/", listCarCont.index);

module.exports = router;