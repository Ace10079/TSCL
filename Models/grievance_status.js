const mongoose = require('mongoose');
const { Schema } = mongoose;

const GrievanceStatusSchema = new Schema({
    id: String,
    status_name: String,
    created_by_user: String,
    created_time: { type: Date, default: Date.now },
    last_updated_time: { type: Date, default: Date.now }
}, { timestamps: true });

const GrievanceStatusModel = mongoose.model('GrievanceStatus', GrievanceStatusSchema);
module.exports = GrievanceStatusModel;
