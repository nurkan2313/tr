const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/index');
router.route('/receive_text').post(userCtrl.textReceiver);

module.exports = router;

