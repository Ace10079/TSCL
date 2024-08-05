const PublicUserService = require('../Service/public_user_service');
const IdcodeServices = require('../Service/idcode_Service');

exports.createPublicUser = async (req, res, next) => {
    try {
        const { public_user_name, phone, email, address, pincode, login_password, verification_status, user_status } = req.body;
        const public_user_id = await IdcodeServices.generateCode("PublicUser");
        const publicUser = await PublicUserService.createPublicUser({ public_user_id, public_user_name, phone, email, address, pincode, login_password, verification_status, user_status });
        
        res.status(201).json({
            status: true,
            message: "Public user created successfully",
            data: publicUser
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllPublicUsers = async (req, res, next) => {
    try {
        const publicUsers = await PublicUserService.getAllPublicUsers();
        res.status(200).json({
            status: true,
            message: "Public users retrieved successfully",
            data: publicUsers
        });
    } catch (error) {
        next(error);
    }
};
