const express = require('express');
const router = express.Router();
const newGrievanceController = require('../Controller/new_grievance_controller');

router.post('/new-grievance', newGrievanceController.createNewGrievance);
router.get('/new-grievances', newGrievanceController.getAllNewGrievances);

module.exports = router;
