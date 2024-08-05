const express = require('express');
const router = express.Router();
const userController = require('../Controller/user_controller');

router.post('/user', userController.createUser);
router.get('/users', userController.getAllUsers);

module.exports = router;
