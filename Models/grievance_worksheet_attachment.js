const mongoose = require('mongoose');
const { Schema } = mongoose;

const GrievanceWorksheetAttachmentSchema = new Schema({
    id: String,
    grievance_id: String,
    worksheet_id: String,
    attachment_name: String,
    created_by_user: String,
    created_time: { type: Date, default: Date.now }
}, { timestamps: true });

const GrievanceWorksheetAttachmentModel = mongoose.model('GrievanceWorksheetAttachment', GrievanceWorksheetAttachmentSchema);
module.exports = GrievanceWorksheetAttachmentModel;
