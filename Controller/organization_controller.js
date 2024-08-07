const OrganizationService = require('../Service/organization_service');
const IdcodeServices = require('../Service/idcode_Service');

exports.createOrganization = async (req, res, next) => {
    try {
        const { org_id, org_name, status, created_by_user } = req.body;
        const organization_id = await IdcodeServices.generateCode("Organization");
        const organization = await OrganizationService.createOrganization({ org_id: organization_id, org_name, status, created_by_user });
        
        res.status(201).json({
            status: true,
            message: "Organization created successfully",
            data: organization
        });
    } catch (error) {
        next(error);
    }
};

exports.getAllOrganizations = async (req, res, next) => {
    try {
        const organizations = await OrganizationService.getAllOrganizations();
        res.status(200).json({
            status: true,
            message: "Organizations retrieved successfully",
            data: organizations
        });
    } catch (error) {
        next(error);
    }
};
