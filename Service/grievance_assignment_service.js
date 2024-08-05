const GrievanceAssignmentModel = require('../Models/grievance_assignment');

exports.createGrievanceAssignment = async (grievanceAssignmentData) => {
    const grievanceAssignment = new GrievanceAssignmentModel(grievanceAssignmentData);
    return await grievanceAssignment.save();
};

exports.getAllGrievanceAssignments = async () => {
    return await GrievanceAssignmentModel.find();
};
