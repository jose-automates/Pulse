const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

// Define Routes
router.get("/test-user", UserController.pruebaUser);

// Export Router
module.exports = router;