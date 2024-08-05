const express = require('express');
const router = express.Router();
const publicUserController = require('../Controller/public_user_controller');

router.post('/public-user', publicUserController.createPublicUser);
router.get('/public-users', publicUserController.getAllPublicUsers);

module.exports = router;
