const express = require('express');
const router = express.Router();
const grievanceWorksheetController = require('../Controller/grievance_worksheet_controller');

router.post('/post', grievanceWorksheetController.createGrievanceWorksheet);
router.get('/get', grievanceWorksheetController.getAllGrievanceWorksheets);

module.exports = router;