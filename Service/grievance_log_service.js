const GrievanceLogModel = require('../Models/grievance_log');

exports.createGrievanceLog = async (grievanceLogData) => {
    const grievanceLog = new GrievanceLogModel(grievanceLogData);
    return await grievanceLog.save();
};

exports.getAllGrievanceLogs = async () => {
    return await GrievanceLogModel.find();
};
