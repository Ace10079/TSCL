const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;


const OrganizationSchema = new Schema({
    id: {
        type: String
    },
    org_id: {
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

const OrganizationModel = db.model('Organization',OrganizationSchema);
module.exports = OrganizationModel;
