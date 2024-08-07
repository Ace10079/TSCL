const DepartmentModel = require('../Models/department');

exports.createDepartment = async (departmentData) => {
    const department = new DepartmentModel(departmentData);
    return await department.save();
};

exports.getAllDepartments = async () => {
    return await DepartmentModel.find();
};
exports.getDepartmentById = async (department_id) => {
    return await DepartmentModel.findOne({ department_id });
};
