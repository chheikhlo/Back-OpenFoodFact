const express = require('express');
const router = express.Router();
const ReplaceFood = require('../controllers/ReplaceFood');

router.post('', ReplaceFood.saveReplaceFood);

module.exports = router;
