const express = require('express');
const router = express.Router();
const LoginController = require('../Controller/login_controller');

router.post('/post', LoginController.registerUser);
router.get('/get', LoginController.getUser);
module.exports = router;
