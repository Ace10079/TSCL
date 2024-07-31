const express = require('express');
const router = express.Router();
const streetController = require('../Controller/street_controller');

router.post('/street', streetController.createStreet);
router.get('/get', streetController.getAllStreets);
router.get('/getbyid/:ward_id/:street_id', streetController.getStreetById);

module.exports = router;
