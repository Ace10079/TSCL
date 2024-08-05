const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewGrievanceAttachmentSchema = new Schema({
    id: String,
    grievance_id: String,
    attachment_name: String,
    created_by_user: String,
    created_time: { type: Date, default: Date.now }
}, { timestamps: true });

const NewGrievanceAttachmentModel = mongoose.model('NewGrievanceAttachment', NewGrievanceAttachmentSchema);
module.exports = NewGrievanceAttachmentModel;
