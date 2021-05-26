const express = require('express');
const { errorHandler } = require('../service')
const user = require('./user');

const router = express.Router();

router.use(user);
router.use(errorHandler);

module.exports = router;
