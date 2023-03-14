const express = require('express');
const { readTalkers } = require('../utils');

const router = express.Router();

router.get('/', async (_req, res) => {
  const talkers = await readTalkers();
  res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const talkers = await readTalkers();
  const foundTalker = talkers.find((talker) => talker.id === Number(id));

  if (!foundTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
  }

  res.status(200).json(foundTalker);
});

module.exports = router;