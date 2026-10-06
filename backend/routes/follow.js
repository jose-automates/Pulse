const express = require("express");
const router = express.Router();
const FollowController = require("../controllers/follow");

// Define Routes
router.get("/test-follow", FollowController.pruebaFollow);

// Export Router
module.exports = router;