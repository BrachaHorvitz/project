const express = require('express');
const router = express.Router();
const coronaController = require('../controllers/coronaController');

// GET corona data by member ID
router.get('/:memberId', coronaController.getCoronaData);

// POST new corona data
router.post('/', coronaController.addCoronaData);

module.exports = router;
