const RoleModel = require('../Models/role');

exports.createRole = async (roleData) => {
    const role = new RoleModel(roleData);
    return await role.save();
};

exports.getAllRoles = async () => {
    return await RoleModel.find();
};
