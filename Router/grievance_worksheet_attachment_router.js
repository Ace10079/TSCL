const express = require('express');
const router = express.Router();
const grievanceWorksheetAttachmentController = require('../Controller/grievance_worksheet_attachment_controller');

router.post('/grievance-worksheet-attachment', grievanceWorksheetAttachmentController.createGrievanceWorksheetAttachment);
router.get('/grievance-worksheet-attachments', grievanceWorksheetAttachmentController.getAllGrievanceWorksheetAttachments);

module.exports = router;
