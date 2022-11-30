const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.use('/category',require('./category'));
router.get('/',homeController.home);
router.post('/addTask',homeController.addTask);
router.get('/deleteTask/:id',homeController.deleteTask);
router.post('/markAsDone/:id',homeController.markAsDone);

module.exports = router;