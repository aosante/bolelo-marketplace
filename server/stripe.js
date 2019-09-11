const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

router.post('/updateBankAccount', (req, res) => {
  const data = req.body;

  stripe.tokens
    .create({
      data,
    })
    .then(r => {
      res.send(r);
    })
    .catch(err => {
      res.send(err);
    });
});
module.exports = router;
