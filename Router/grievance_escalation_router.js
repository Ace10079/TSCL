const express = require('express');
const router = express.Router();
const grievanceEscalationController = require('../Controller/grievance_escalation_controller');

router.post('/post', grievanceEscalationController.createGrievanceEscalation);
router.get('/get', grievanceEscalationController.getAllGrievanceEscalations);

module.exports = router;
