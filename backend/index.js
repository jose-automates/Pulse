// Import Dependencies
require('dotenv').config();
const cors = require("cors");
const { conn } =  require("./db/conn");
const express = require("express");

// Import Routes
const UserRoutes = require("./routes/user");
const PublicationRoutes = require("./routes/publication");
const FollowRoutes = require("./routes/follow");


// Welcoming Message
console.log("API Node initialized");

// DB Conn
conn();

// Create Node Server
const app = express();
const PORT = process.env.PORT;

// Configure CORS
app.use(cors());

// Convert body data to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure routes
app.use("/api", UserRoutes);
app.use("/api", FollowRoutes);
app.use("/api", PublicationRoutes);


// Listen to https requests
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});