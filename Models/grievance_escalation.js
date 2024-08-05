const mongoose = require('mongoose');
const { Schema } = mongoose;

const GrievanceEscalationSchema = new Schema({
    id: String,
    grievance_id: String,
    escalation_details: String,
    escalation_level: String,
    escalation_department: String,
    escalation_to: String,
    escalated_user: String,
    status: String,
    created_time: { type: Date, default: Date.now }
}, { timestamps: true });

const GrievanceEscalationModel = mongoose.model('GrievanceEscalation', GrievanceEscalationSchema);
module.exports = GrievanceEscalationModel;
