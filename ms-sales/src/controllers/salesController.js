const Sale = require('../models/sale');
const paymentService = require('../services/paymentService');

exports.createSale = async (req, res) => {
    const { customer, items, total, paymentDetails } = req.body;
    try {
        const paymentResult = await paymentService.processPayment({
            amount: total * 100,
            paymentMethodId: paymentDetails.paymentMethodId
        });

        if (!paymentResult.success) {
            return res.status(400).json({ error: paymentResult.error });
        }

        const sale = new Sale({
            customer,
            items,
            total,
            paymentDetails: {
                ...paymentDetails,
                transactionId: paymentResult.transactionId,
            },
            status: 'completed'
        });

        await sale.save();
        res.status(201).json(sale);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getSales = async (req, res) => {
    try {
        const sales = await Sale.find();
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.getSaleById = async (req, res) => {
    const { id } = req.params;
    try {
        const sale = await Sale.findById(id);
        if (!sale) return res.status(404).json({ error: 'Sale not found' });

        res.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.createReceipt = async (req, res) => {
    const { id } = req.params;
    try {
        const sale = await Sale.findById(id);
        if (!sale) return res.status(404).json({ error: 'Sale not found' });

        const receipt = {
            saleId: sale._id,
            date: sale.createdAt,
            customer: sale.customer,
            items: sale.items,
            total: sale.total,
            paymentDetails: sale.paymentDetails,
        };

        res.status(200).json(receipt);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const sale = await Sale.findByIdAndUpdate(id, { status }, { new: true });
        if (!sale) return res.status(404).json({ error: 'Sale not found' });

        res.status(200).json(sale);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
