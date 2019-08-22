const express = require('express');
const router = express.Router();
const ShareTempus = require('sharetempus')('sk_test_aSZmjGtnjHPNRuNe3qy8XAiY');

router.post('/createSTUser', (req, res) => {
  const data = req.body;

  ShareTempus.customers
    .create(data)
    .then(r => {
      res.send(r);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/categories', (req, res) => {
  ShareTempus.categories
    .retrieve()
    .then(function(categories) {
      console.log(categories);
    })
    .catch(function(error) {
      console.log(error);
    });
});

router.get('/itemInsuranceData', (req, res) => {
  const data = req.body;
  ShareTempus.policies
    .quote(data)
    .then(r => {
      res.send(r);
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;
