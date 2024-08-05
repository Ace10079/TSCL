const express = require('express');
const router = express.Router();
const grievanceStatusController = require('../Controller/grievance_status_controller');

router.post('/grievance-status', grievanceStatusController.createGrievanceStatus);
router.get('/grievance-statuses', grievanceStatusController.getAllGrievanceStatuses);

module.exports = router;
