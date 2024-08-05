const express = require('express');
const router = express.Router();
const roleController = require('../Controller/role_controller');

router.post('/role', roleController.createRole);
router.get('/roles', roleController.getAllRoles);

module.exports = router;
