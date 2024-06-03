const express = require('express');
const salesController = require('../controllers/salesController');
const router = express.Router();

router.post('/sales', salesController.createSale);
router.get('/sales', salesController.getSales);
router.get('/sales/:id', salesController.getSaleById);

module.exports = router;
