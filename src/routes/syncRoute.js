const express = require("express");
const { triggerSync } = require("../controllers/syncController");
const router = express.Router();

router.get("/trigger-sync", triggerSync);

module.exports = router;
