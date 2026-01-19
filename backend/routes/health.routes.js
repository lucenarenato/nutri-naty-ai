const express = require('express');
const router = express.Router();
const HealthController = require('../controllers/health.controller');

router.get('/', HealthController.checkHealth);

module.exports = router;
