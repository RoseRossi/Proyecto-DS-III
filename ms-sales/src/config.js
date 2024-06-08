module.exports = {
    port: process.env.PORT || 3000,
    dbUri: process.env.DB_URI || 'mongodb://mongodb:27017/sales-service',
};