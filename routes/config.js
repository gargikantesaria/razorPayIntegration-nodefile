const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/', require('../modules/payment/paymentRoute'));

router.all('/*', (req, res) => {
  return res.status(404).send({ error: 'Not found' });
});

module.exports = router;