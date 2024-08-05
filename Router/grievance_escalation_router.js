const express = require('express');
const router = express.Router();
const grievanceEscalationController = require('../Controller/grievance_escalation_controller');

router.post('/grievance-escalation', grievanceEscalationController.createGrievanceEscalation);
router.get('/grievance-escalations', grievanceEscalationController.getAllGrievanceEscalations);

module.exports = router;
