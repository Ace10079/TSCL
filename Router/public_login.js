const express = require('express');
const router = express.Router();
const PublicLoginController = require('../Controller/public_login_controller');

router.post('/post', PublicLoginController.registerPublicUser);
router.get('/get', PublicLoginController.getPublicUser);
module.exports = router;
