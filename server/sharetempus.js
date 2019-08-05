const express = require('express');
const router = express.Router();
const ShareTempus = require('sharetempus')(process.env.REACT_APP_SAHRETEMPUS_KEY);

router.get('/test', (req, res) => {
  res.json(req.query);
});

module.exports = router;
