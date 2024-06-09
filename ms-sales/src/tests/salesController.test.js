const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const salesRoutes = require('../routes/salesRoutes');
const Sale = require('../models/sale');
const paymentService = require('../services/paymentService');

// Mock del servicio de pago
jest.mock('../services/paymentService');

const app = express();
app.use(express.json());
app.use('/api', salesRoutes);

describe('Sales Controller', () => {
    beforeAll(async () => {
        const url = `mongodb://127.0.0.1/sales-service-test`;
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false,
            connectTimeoutMS: 30000,
        });

        await new Promise(resolve => setTimeout(resolve, 5000));
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await Sale.deleteMany({}); 
    });

    afterEach(async () => {
        jest.clearAllMocks();
    });

    it('should create a sale', async () => {
        paymentService.processPayment.mockResolvedValue({ success: true, transactionId: '12345' });

        const response = await request(app)
            .post('/api/sales')
            .send({
                customer: { name: 'John Doe', email: 'john.doe@example.com', address: '123 Main St' },
                items: [
                    { productId: 'part1', quantity: 2, price: 50 },
                    { productId: 'part2', quantity: 1, price: 100 }
                ],
                total: 200,
                paymentDetails: { paymentMethodId: 'pm_card_visa' }
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('customer.name', 'John Doe');
        expect(response.body).toHaveProperty('paymentDetails.transactionId', '12345');
    });

    it('should get all sales', async () => {

        const sale1 = new Sale({
            customer: { name: 'John Doe', email: 'john.doe@example.com', address: '123 Main St' },
            items: [
                { productId: 'part1', quantity: 2, price: 50 }
            ],
            total: 100,
            paymentDetails: { paymentMethodId: 'pm_card_visa', transactionId: '12345' },
            status: 'completed'
        });

        const sale2 = new Sale({
            customer: { name: 'Jane Doe', email: 'jane.doe@example.com', address: '456 Elm St' },
            items: [
                { productId: 'part2', quantity: 1, price: 100 }
            ],
            total: 100,
            paymentDetails: { paymentMethodId: 'pm_card_mastercard', transactionId: '67890' },
            status: 'completed'
        });

        await sale1.save();
        await sale2.save();

        const response = await request(app).get('/api/sales');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2);
        expect(response.body[0]).toHaveProperty('customer.name', 'John Doe');
        expect(response.body[1]).toHaveProperty('customer.name', 'Jane Doe');
    });
});
