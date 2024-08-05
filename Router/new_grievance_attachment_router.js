const express = require('express');
const router = express.Router();
const newGrievanceAttachmentController = require('../Controller/new_grievance_attachment_controller');

router.post('/new-grievance-attachment', newGrievanceAttachmentController.createNewGrievanceAttachment);
router.get('/new-grievance-attachments', newGrievanceAttachmentController.getAllNewGrievanceAttachments);

module.exports = router;
