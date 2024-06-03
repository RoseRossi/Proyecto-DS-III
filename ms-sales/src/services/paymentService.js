// Mock payment service - to be replaced with actual payment gateway integration
exports.processPayment = async (paymentDetails) => {
    // Simulate payment processing
    return {
        success: true,
        transactionId: '1234567890'
    };
};
