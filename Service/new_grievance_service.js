const NewGrievanceModel = require('../Models/new_grievance');

exports.createNewGrievance = async (newGrievanceData) => {
    const newGrievance = new NewGrievanceModel(newGrievanceData);
    return await newGrievance.save();
};

exports.getAllNewGrievances = async () => {
    return await NewGrievanceModel.find();
};
