const express = require('express');
const salesController = require('../controllers/salesController');
const router = express.Router();

router.post('/sales', salesController.createSale);
router.get('/sales', salesController.getSales);
router.get('/sales/:id', salesController.getSaleById);
router.get('/sales/:id/receipt', salesController.createReceipt);
router.patch('/sales/:id/status', salesController.updateOrderStatus);

module.exports = router;
