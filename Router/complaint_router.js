const express = require('express');
const router = express.Router();
const complaintController = require('../Controller/complaint_controller');

router.post('/post', complaintController.createComplaint);
router.get('/get', complaintController.getAllComplaints);

module.exports = router;
