const mongoose = require('mongoose');
const { Schema } = mongoose;

const GrievanceLogSchema = new Schema({
    id: String,
    grievance_id: String,
    log_details: String,
    created_by_user: String,
    created_time: { type: Date, default: Date.now }
}, { timestamps: true });

const GrievanceLogModel = mongoose.model('GrievanceLog', GrievanceLogSchema);
module.exports = GrievanceLogModel;
