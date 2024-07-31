const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const DepartmentSchema = new Schema({
    id: {
        type: String
    },
    dept_id: {
        type: String
    },
    dept_name: {
        type: String
    },
    org_name: {
        type: String
    },
    status: {
        type: String
    },
    created_by_user: {
        type: String
    },
    created_time: {
        type: String
    },
    last_updated_time: {
        type: String
    }
}, { timestamps: true });

const DepartmentModel = db.model('Department', DepartmentSchema);
module.exports = DepartmentModel;
