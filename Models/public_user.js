const mongoose = require('mongoose');
const { Schema } = mongoose;

const PublicUserSchema = new Schema({
    id: String,
    public_user_id: String,
    public_user_name: String,
    phone: String,
    email: String,
    address: String,
    pincode: String,
    login_password: String,
    verification_status: String,
    user_status: String,
    created_time: { type: Date, default: Date.now },
    last_updated_time: { type: Date, default: Date.now }
}, { timestamps: true });

const PublicUserModel = mongoose.model('PublicUser', PublicUserSchema);
module.exports = PublicUserModel;
