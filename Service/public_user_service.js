const PublicUserModel = require('../Models/public_user');

exports.createPublicUser = async (publicUserData) => {
    const publicUser = new PublicUserModel(publicUserData);
    return await publicUser.save();
};

exports.getAllPublicUsers = async () => {
    return await PublicUserModel.find();
};
