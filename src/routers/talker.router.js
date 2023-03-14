const express = require('express');
const { readTalkers, writeTalker } = require('../utils');
const {
  tokenValidation,
  talkerValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
} = require('../middlewares');

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

const validation = [
  tokenValidation, 
  talkerValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
];

router.post('/', validation, async (req, res) => {
    const { name, age, talk: { watchedAt, rate } } = req.body;

    const talkers = await readTalkers();

    const newTalker = {
      id: talkers.length + 1,
      name,
      age,
      talk: { watchedAt, rate },
    };

    await writeTalker([...talkers, newTalker]);

    res.status(201).json(newTalker);
});

router.put('/:id', validation, async (req, res) => {
  const { id } = req.params;
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const talkers = await readTalkers();

  const talkerIndex = talkers.findIndex((talker) => talker.id === Number(id));

  if (talkerIndex === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  talkers[talkerIndex] = {
    ...talkers[talkerIndex],
    name,
    age,
    talk: { ...talkers[talkerIndex].talk, watchedAt, rate },
  };
  await writeTalker(talkers);
  res.status(200).json(talkers[talkerIndex]);
});

module.exports = router;