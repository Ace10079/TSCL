const ComplaintModel = require('../Models/complaint');

exports.createComplaint = async (complaintData) => {
    const complaint = new ComplaintModel(complaintData);
    return await complaint.save();
};

exports.getAllComplaints = async () => {
    return await ComplaintModel.find();
};
