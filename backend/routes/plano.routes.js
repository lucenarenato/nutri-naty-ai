const express = require('express');
const router = express.Router();
const PlanoController = require('../controllers/plano.controller');

router.post('/gerar', PlanoController.gerarPlano);

module.exports = router;
