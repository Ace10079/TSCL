const PublicLoginModel = require('../Models/public_login');
const bcrypt = require('bcrypt');

exports.checkPublicUserExists = async (phone, username) => {
    return await PublicLoginModel.findOne({
        $or: [{ phone }, { username }]
    });
};

exports.registerPublicUser = async ({ phone, username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new PublicLoginModel({
        phone,
        username,
        password: hashedPassword
    });
    return await user.save();
};

exports.getPublicUser = async (phone, username) => {
    return await PublicLoginModel.findOne({
        $or: [{ phone }, { username }]
    });
};
