const LoginService = require('../Service/login_service');
exports.registerUser = async (req, res, next) => {
    try {
        const { phone, username, password } = req.body;

        if (!phone || !username || !password) {
            return res.status(400).json({ status: false, message: "Phone, username, and password are required" });
        }

        const existingUser = await LoginService.checkUserExists(phone, username);
        if (existingUser) {
            return res.status(409).json({ status: false, message: "User already exists" });
        }

        const user = await LoginService.registerUser({ phone, username, password });

        res.status(201).json({
            status: true,
            message: "User registered successfully",
            data: user
        });
    } catch (error) {
        next(error);
    }
};
exports.getUser = async (req, res, next) => {
    try {
        const { phone, username } = req.query;

        const user = await LoginService.getUser(phone, username);
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }

        res.status(200).json({
            status: true,
            message: "User retrieved successfully",
            data: user
        });
    } catch (error) {
        next(error);
    }
};