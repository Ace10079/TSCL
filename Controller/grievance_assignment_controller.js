const GrievanceAssignmentService = require('../Service/grievance_assignment_service');

exports.createGrievanceAssignment = async (req, res, next) => {
    try {
        const { grievance_id, user_id, assigned_to } = req.body;
        const grievanceAssignment = await GrievanceAssignmentService.createGrievanceAssignment({ grievance_id, user_id, assigned_to });
        
        res.status(201).json({
            status: true,
            message: "Grievance assignment created successfully",
            data: grievanceAssignment
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllGrievanceAssignments = async (req, res, next) => {
    try {
        const grievanceAssignments = await GrievanceAssignmentService.getAllGrievanceAssignments();
        res.status(200).json({
            status: true,
            message: "Grievance assignments retrieved successfully",
            data: grievanceAssignments
        });
    } catch (error) {
        next(error);
    }
};
