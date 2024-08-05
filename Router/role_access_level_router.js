const express = require('express');
const router = express.Router();
const roleAccessLevelController = require('../Controller/role_access_level_controller');

router.post('/role-access-level', roleAccessLevelController.createRoleAccessLevel);
router.get('/role-access-levels', roleAccessLevelController.getAllRoleAccessLevels);

module.exports = router;
