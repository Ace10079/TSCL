const express = require('express');
const router = express.Router();
const complaintController = require('../Controller/complaint_controller');

router.post('/complaint', complaintController.createComplaint);
router.get('/complaints', complaintController.getAllComplaints);

module.exports = router;
