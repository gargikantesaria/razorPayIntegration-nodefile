const express = require('express');
const paymentCtr = require('./paymentController.js');

const paymentRouter = express.Router();

// Routes
paymentRouter.post('/paymentCapture', paymentCtr.addPayment);
paymentRouter.get('/getallpayments', paymentCtr.getPayment);

module.exports = paymentRouter;