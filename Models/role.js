const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoleSchema = new Schema({
    id: String,
    role_id: String,
    role_name: String,
    status: String,
    created_by_user: String,
    created_time: { type: Date, default: Date.now },
    last_updated_time: { type: Date, default: Date.now }
}, { timestamps: true });

const RoleModel = mongoose.model('Role', RoleSchema);
module.exports = RoleModel;
