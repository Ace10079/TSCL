const express = require('express');
const router = express.Router();
const publicUserController = require('../Controller/public_user_controller');

router.post('/post', publicUserController.createPublicUser);
router.get('/get', publicUserController.getAllPublicUsers);

module.exports = router;
