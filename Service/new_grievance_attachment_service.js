const NewGrievanceAttachmentModel = require('../Models/new_grievance_attachment');

exports.createNewGrievanceAttachment = async (newGrievanceAttachmentData) => {
    const newGrievanceAttachment = new NewGrievanceAttachmentModel(newGrievanceAttachmentData);
    return await newGrievanceAttachment.save();
};

exports.getAllNewGrievanceAttachments = async () => {
    return await NewGrievanceAttachmentModel.find();
};