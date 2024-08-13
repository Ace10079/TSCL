const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const LoginSchema = new Schema({
    phone: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
}, { timestamps: true });

const LoginModel = db.model('Login', LoginSchema);
module.exports = LoginModel;
