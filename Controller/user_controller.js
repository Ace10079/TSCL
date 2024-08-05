const UserService = require('../Service/user_service');
const IdcodeServices = require('../Service/idcode_Service');

exports.createUser = async (req, res, next) => {
    try {
        const { user_name, dept_name, phone, email, address, pincode, login_password, status, role, login_status, created_by_user } = req.body;
        const user_id = await IdcodeServices.generateCode("User");
        const user = await UserService.createUser({ user_id, user_name, dept_name, phone, email, address, pincode, login_password, status, role, login_status, created_by_user });
        
        res.status(201).json({
            status: true,
            message: "User created successfully",
            data: user
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json({
            status: true,
            message: "Users retrieved successfully",
            data: users
        });
    } catch (error) {
        next(error);
    }
};
