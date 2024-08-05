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
    last_login_time: { type: Date, default: Date.now },
    last_updated_time: { type: Date, default: Date.now },
    created_by_user: String,
    created_time: { type: Date, default: Date.now }
}, { timestamps: true });

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
