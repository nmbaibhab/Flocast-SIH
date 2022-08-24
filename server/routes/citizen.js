const express = require("express");
const router = express.Router();

// Controllers

const { create } = require("../controllers/createCitizen");
router.route("/create").post(create);

module.exports = router;
