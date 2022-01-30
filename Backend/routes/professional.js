const express = require('express');

const professionalController = ('../controllers/professional');

const router = express.Router();

//Get feed posts

router.get('/', professionalController.getData);

module.exports = router;