var express = require("express");
var router = express.Router();
var controller = require("../controllers/userControllers");

router.get("/", controller.index);

module.exports = router;
