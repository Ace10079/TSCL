const express = require('express');
const router = express.Router();
const departmentController = require('../Controller/department_controller');

router.post('/post', departmentController.createDepartment);
router.get('/get', departmentController.getAllDepartments);

module.exports = router;
