
const Razorpay = require('razorpay');

const paymentCtr = {};

let rzp = new Razorpay({
  key_id: process.env.KEY_ID, // your `KEY_ID`
  key_secret: process.env.KEY_SECRET // your `KEY_SECRET`
});

paymentCtr.addPayment = (req, res) => {

  rzp.payments.capture(req.body.payment_id, req.body.amount).then((data) => {
    // success
    res.status(200).send({ body: "Your payment has been captured.", data: data });
  }).catch((error) => {
    // error
    res.status(400).send({ body: "Sorry, There is an error to capture the payment.", data: error });
  })

};

paymentCtr.getPayment = (req, res) => {

  rzp.payments.all({
    // from: START_DATE,
    // to: END_DATE
  }).then((response) => {
    // success
    res.status(200).send({ body: "Your payment data has been collected.", data: response });
  }).catch((error) => {
    // error
    res.status(400).send({ body: "Sorry, There is an error to get the payment data.", data: error });
  })
  
};

module.exports = paymentCtr;