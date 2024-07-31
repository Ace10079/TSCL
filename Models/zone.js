const db = require('../Config/db');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ZoneSchema = new Schema({
    id: {
        type: String
    },
    zone_id: {
        type: String
    },
    zone_name: {
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

const ZoneModel = db.model('Zone', ZoneSchema);
module.exports = ZoneModel;
