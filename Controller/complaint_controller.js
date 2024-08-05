const ComplaintService = require('../Service/complaint_service');
const IdcodeServices = require('../Service/idcode_Service');

exports.createComplaint = async (req, res, next) => {
    try {
        const { complaint_type_title, dept, tat_type, tat_duration, priority, escalation_l1, escalation_l2, escalation_l3, status, created_by_user } = req.body;
        const complaint_id = await IdcodeServices.generateCode("Complaint");
        const complaint = await ComplaintService.createComplaint({ complaint_id, complaint_type_title, dept, tat_type, tat_duration, priority, escalation_l1, escalation_l2, escalation_l3, status, created_by_user });
        
        res.status(201).json({
            status: true,
            message: "Complaint created successfully",
            data: complaint
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllComplaints = async (req, res, next) => {
    try {
        const complaints = await ComplaintService.getAllComplaints();
        res.status(200).json({
            status: true,
            message: "Complaints retrieved successfully",
            data: complaints
        });
    } catch (error) {
        next(error);
    }
};