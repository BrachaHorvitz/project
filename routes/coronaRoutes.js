const express = require('express');
const router = express.Router();

const coronaController = require('../controllers/coronaController');

router.get('/', coronaController.getAllCoronas);
router.post('/', coronaController.createCorona);
router.get('/:id', coronaController.getCoronaById);

module.exports = router;
