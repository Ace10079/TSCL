const express = require('express');
const router = express.Router();
const organizationController = require('../Controller/organization_controller');

router.post('/post', organizationController.createOrganization);
router.get('/get', organizationController.getAllOrganizations);

module.exports = router;
