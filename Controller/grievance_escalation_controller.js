const GrievanceEscalationService = require('../Service/grievance_escalation_service');

exports.createGrievanceEscalation = async (req, res, next) => {
    try {
        const { grievance_id, escalation_details, escalation_level, escalation_department, escalation_to, escalated_user, status } = req.body;
        const grievanceEscalation = await GrievanceEscalationService.createGrievanceEscalation({
            grievance_id, escalation_details, escalation_level, escalation_department, escalation_to, escalated_user, status
        });

        res.status(201).json({
            status: true,
            message: "Grievance escalation created successfully",
            data: grievanceEscalation
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllGrievanceEscalations = async (req, res, next) => {
    try {
        const grievanceEscalations = await GrievanceEscalationService.getAllGrievanceEscalations();
        res.status(200).json({
            status: true,
            message: "Grievance escalations retrieved successfully",
            data: grievanceEscalations
        });
    } catch (error) {
        next(error);
    }
};
