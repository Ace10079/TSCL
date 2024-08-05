const UserModel = require('../Models/user');

exports.createUser = async (userData) => {
    const user = new UserModel(userData);
    return await user.save();
};

exports.getAllUsers = async () => {
    return await UserModel.find();
};
