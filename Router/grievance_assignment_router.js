const express = require('express');
const router = express.Router();
const grievanceAssignmentController = require('../Controller/grievance_assignment_controller');

router.post('/grievance-assignment', grievanceAssignmentController.createGrievanceAssignment);
router.get('/grievance-assignments', grievanceAssignmentController.getAllGrievanceAssignments);

module.exports = router;
