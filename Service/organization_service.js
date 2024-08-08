const OrganizationModel = require('../Models/organization');

exports.createOrganization = async (organizationData) => {
    const organization = new OrganizationModel(organizationData);
    return await organization.save();
};

exports.getAllOrganizations = async () => {
    return await OrganizationModel.find();
};
exports.getOrganizationById = async (org_id) => {
    return await OrganizationModel.findOne({ org_id });
};
