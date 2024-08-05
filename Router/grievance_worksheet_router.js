const express = require('express');
const router = express.Router();
const grievanceWorksheetController = require('../Controller/grievance_worksheet_controller');

router.post('/grievance-worksheet', grievanceWorksheetController.createGrievanceWorksheet);
router.get('/grievance-worksheets', grievanceWorksheetController.getAllGrievanceWorksheets);

module.exports = router;
