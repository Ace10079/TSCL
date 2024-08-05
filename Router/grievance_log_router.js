const express = require('express');
const router = express.Router();
const grievanceLogController = require('../Controller/grievance_log_controller');

router.post('/post', grievanceLogController.createGrievanceLog);
router.get('/get', grievanceLogController.getAllGrievanceLogs);

module.exports = router;
