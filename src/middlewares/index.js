const loginValidation = require('./loginValidation');
const talkerValidation = require('./talkerValidation');
const tokenValidation = require('./tokenValidation');
const { talkValidation, watchedAtValidation, rateValidation } = require('./talkValidation');

module.exports = {
  loginValidation,
  talkerValidation,
  tokenValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
};