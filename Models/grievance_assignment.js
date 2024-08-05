const mongoose = require('mongoose');
const { Schema } = mongoose;

const GrievanceAssignmentSchema = new Schema({
    id: String,
    grievance_id: String,
    user_id: String,
    assigned_to: String,
    assigned_time: { type: Date, default: Date.now },
    last_updated_time: { type: Date, default: Date.now }
}, { timestamps: true });

const GrievanceAssignmentModel = mongoose.model('GrievanceAssignment', GrievanceAssignmentSchema);
module.exports = GrievanceAssignmentModel;
