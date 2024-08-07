const WardService = require('../Service/ward_Service');
const IdcodeServices = require('../Service/idcode_Service');

exports.createWard = async (req, res, next) => {
    try {
        const { status, zone_id, zone_name, created_by_user,ward_name } = req.body;
        const ward_id = await IdcodeServices.generateCode("Ward");
        const ward = await WardService.createWard({ ward_id, status, zone_id, zone_name, created_by_user ,ward_name});
        
        res.status(201).json({
            status: true,
            message: "Ward created successfully",
            data: ward
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllWards = async (req, res, next) => {
    try {
        const wards = await WardService.getAllWards();
        res.status(200).json({
            status: true,
            message: "Wards retrieved successfully",
            data: wards
        });
    } catch (error) {
        next(error);
    }
};

exports.getWardById = async (req, res, next) => {
    try {
        const { zone_id, ward_id } = req.query;
        const ward = await WardService.getWardById(zone_id, ward_id);
        if (!ward) {
            return res.status(404).json({ status: false, message: "Ward not found" });
        }
        res.status(200).json({
            status: true,
            message: "Ward retrieved successfully",
            data: ward
        });
    } catch (error) {
        next(error);
    }
};
