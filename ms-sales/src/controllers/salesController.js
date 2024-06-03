const Sale = require('../models/sale');

exports.createSale = async (req, res) => {
    const { customer, items, total, paymentDetails } = req.body;
    try {
        const sale = new Sale({ customer, items, total, paymentDetails, status: 'pending' });
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
