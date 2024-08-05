const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoleAccessLevelSchema = new Schema({
    id: String,
    role_id: String,
    feature_access: String,
    access_type: String,
    status: String,
    created_by_user: String,
    created_time: { type: Date, default: Date.now },
    last_updated_time: { type: Date, default: Date.now }
}, { timestamps: true });

const RoleAccessLevelModel = mongoose.model('RoleAccessLevel', RoleAccessLevelSchema);
module.exports = RoleAccessLevelModel;
