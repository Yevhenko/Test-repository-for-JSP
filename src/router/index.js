const express = require('express');
const { errorHandler } = require('../service');
const user = require('./user');
const project = require('./project');

const router = express.Router();

router.use(user);
router.use(project);
router.use(errorHandler);

module.exports = router;
