const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const WardSchema = new Schema({
    id: {
        type: String
    },
    ward_id: {
        type: String
    },
    status: {
        type: String
    },
    zone_id: {
        type: String
    },
    zone_name: {
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

const WardModel = db.model('Ward', WardSchema);
module.exports = WardModel;
