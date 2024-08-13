const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const PublicLoginSchema = new Schema({
    phone: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
}, { timestamps: true });

const PublicLoginModel = db.model('PublicLogin', PublicLoginSchema);
module.exports = PublicLoginModel;
