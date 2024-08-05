const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComplaintSchema = new Schema({
    id: String,
    complaint_id: String,
    complaint_type_title: String,
    dept: String,
    tat_type: String,
    tat_duration: Number,
    priority: String,
    escalation_l1: String,
    escalation_l2: String,
    escalation_l3: String,
    status: String,
    created_by_user: String,
    created_time: { type: Date, default: Date.now },
    last_updated_time: { type: Date, default: Date.now }
}, { timestamps: true });

const ComplaintModel = mongoose.model('Complaint', ComplaintSchema);
module.exports = ComplaintModel;
