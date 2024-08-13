const LoginModel = require('../Models/login');
const bcrypt = require('bcrypt');

exports.checkUserExists = async (phone, username) => {
    return await LoginModel.findOne({
        $or: [{ phone }, { username }]
    });
};

exports.registerUser = async ({ phone, username, password }) => {
    if (!password) {
        throw new Error("Password is required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new LoginModel({
        phone,
        username,
        password: hashedPassword
    });
    return await user.save();
};

exports.getUser = async (phone, username) => {
    return await LoginModel.findOne({
        $or: [{ phone }, { username }]
    });
};
