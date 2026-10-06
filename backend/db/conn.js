// Connect Mongoose DB
require('dotenv').config();

const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const conn = async () => {

    try
    {
        await mongoose.connect(DB_URL, {});

        console.log("Mongo DB Database connection was successful");
    }

    catch(e)
    {
        console.error(e);
        throw new Error("Could not connect to database", e);
    }

};

module.exports = {
    conn
};