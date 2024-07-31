const express = require('express');
const router = express.Router();
const wardController = require('../Controller/ward_Controller');

router.post('/ward', wardController.createWard);
router.get('/get', wardController.getAllWards);
router.get('/getbyid/:zone_id/:ward_id', wardController.getWardById);

module.exports = router;