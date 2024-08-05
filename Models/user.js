const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: String,
    user_id: String,
    user_name: String,
    dept_name: String,
    phone: String,
    email: String,
    address: String,
    pincode: String,
    login_password: String,
    status: String,
    role: String,
    login_status: String,
}, { timestamps: true });

const UserModel = db.model('User', UserSchema);
module.exports = UserModel;
