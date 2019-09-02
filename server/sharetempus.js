const express = require('express');
const router = express.Router();
const ShareTempus = require('sharetempus')(process.env.REACT_APP_SHARETEMPUS_KEY);

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

router.post('/itemInsuranceData', (req, res) => {
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

router.post('/createPolicy', (req, res) => {
  const data = req.body;
  console.log(data);
  ShareTempus.policies
    .create(data)
    .then(r => {
      res.send(r);
    })
    .catch(function(error) {
      console.log(error);
    });
});

router.get('/getPolicy', (req, res) => {
  const data = req.body;
  ShareTempus.policies
    .retrieve({
      policy: data,
    })
    .then(r => {
      res.send(r);
    })
    .catch(function(error) {
      console.log(error);
    });
});
module.exports = router;
