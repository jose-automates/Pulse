const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    surname: String,
    nick: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "default.png"
    },
    role: {
        type: String,
        default: "USER"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});