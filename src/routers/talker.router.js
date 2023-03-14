const express = require('express');
const { readTalkers, writeTalker } = require('../utils');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talkers = await readTalkers();
  res.status(200).json(talkers);
});

module.exports = router;