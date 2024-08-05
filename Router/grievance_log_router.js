const express = require('express');
const router = express.Router();
const grievanceLogController = require('../Controller/grievance_log_controller');

router.post('/grievance-log', grievanceLogController.createGrievanceLog);
router.get('/grievance-logs', grievanceLogController.getAllGrievanceLogs);

module.exports = router;
