const mongoose = require('mongoose');
const { Schema } = mongoose;

const GrievanceWorksheetSchema = new Schema({
    id: String,
    grievance_id: String,
    worksheet_name: String,
    created_by_user: String,
    created_time: { type: Date, default: Date.now }
}, { timestamps: true });

const GrievanceWorksheetModel = mongoose.model('GrievanceWorksheet', GrievanceWorksheetSchema);
module.exports = GrievanceWorksheetModel;
