const express = require('express');

const router = express.Router();

const talkerRouter = require('./talker.router');
const loginRouter = require('./login.router');

router.use('/talker', talkerRouter);
router.use('/login', loginRouter);

module.exports = router;