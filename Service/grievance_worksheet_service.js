const GrievanceWorksheetModel = require('../Models/grievance_worksheet');

exports.createGrievanceWorksheet = async (grievanceWorksheetData) => {
    const grievanceWorksheet = new GrievanceWorksheetModel(grievanceWorksheetData);
    return await grievanceWorksheet.save();
};

exports.getAllGrievanceWorksheets = async () => {
    return await GrievanceWorksheetModel.find();
};
