const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    customer: {
        name: String,
        email: String,
        address: String,
    },
    items: [{
        productId: String,
        quantity: Number,
        price: Number,
    }],
    total: Number,
    paymentDetails: {
        method: String,
        transactionId: String,
    },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Sale', saleSchema);
