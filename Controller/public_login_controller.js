const PublicLoginService = require('../Service/public_login_service');

exports.registerPublicUser = async (req, res, next) => {
    try {
        const { phone, username, password } = req.body;

        if (!phone || !username || !password) {
            return res.status(400).json({ status: false, message: "Phone, username, and password are required" });
        }

        const existingUser = await PublicLoginService.checkPublicUserExists(phone, username);
        if (existingUser) {
            return res.status(409).json({ status: false, message: "User already exists" });
        }

        const user = await PublicLoginService.registerPublicUser({ phone, username, password });

        res.status(201).json({
            status: true,
            message: "Public user registered successfully",
            data: user
        });
    } catch (error) {
        next(error);
    }
};

exports.getPublicUser = async (req, res, next) => {
    try {
        const { phone, username } = req.query;

        const user = await PublicLoginService.getPublicUser(phone, username);
        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }

        res.status(200).json({
            status: true,
            message: "Public user retrieved successfully",
            data: user
        });
    } catch (error) {
        next(error);
    }
};
