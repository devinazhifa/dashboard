const express = require("express");
const router = express.Router();
const editCarCont = require("../controllers/editcar");

router.use((req, res, next) => {
  req.app.set("editcar");
  next();
});

router.get("/", editCarCont.index);

module.exports = router;