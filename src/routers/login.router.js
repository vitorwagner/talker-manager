const express = require('express');
const cryptoRandomString = require('crypto-random-string');
const { loginValidation } = require('../middlewares');

const router = express.Router();

router.post('/', loginValidation, (_req, res) => {
  const token = cryptoRandomString(16);
  res.status(200).json({ token });
});

module.exports = router;