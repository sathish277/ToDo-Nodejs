const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/addCategory',categoryController.addCategory);
router.get('/show',categoryController.show);

module.exports = router;