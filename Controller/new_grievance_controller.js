const NewGrievanceService = require('../Service/new_grievance_service');
const IdcodeServices = require('../Service/idcode_Service');

exports.createNewGrievance = async (req, res, next) => {
    try {
        const { complaint_type_title, title, complaint_details, dept_name, zone_name, ward_name, street_name, public_user_id, public_user_name, grievance_mode, status, escalation_level } = req.body;
        const grievance_id = await IdcodeServices.generateCode("NewGrievance");
        const newGrievance = await NewGrievanceService.createNewGrievance({ grievance_id, complaint_type_title, title, complaint_details, dept_name, zone_name, ward_name, street_name, public_user_id, public_user_name, grievance_mode, status, escalation_level });
        
        res.status(201).json({
            status: true,
            message: "New grievance created successfully",
            data: newGrievance
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllNewGrievances = async (req, res, next) => {
    try {
        const newGrievances = await NewGrievanceService.getAllNewGrievances();
        res.status(200).json({
            status: true,
            message: "New grievances retrieved successfully",
            data: newGrievances
        });
    } catch (error) {
        next(error);
    }
};
