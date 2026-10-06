const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers/publication");

// Define Routes
router.get("/test-publication", PublicationController.pruebaPublication);

// Export Router
module.exports = router;