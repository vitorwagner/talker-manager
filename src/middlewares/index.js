const loginValidation = require('./loginValidation');
const talkerValidation = require('./talkerValidation');
const tokenValidation = require('./tokenValidation');
const {
  talkValidation,
  watchedAtValidation,
  rateValidation,
  ratePatchValidation,
} = require('./talkValidation');
const {
  queryWatchedAtValidation,
  queryRateValidation,
} = require('./queryValidation');

module.exports = {
  loginValidation,
  talkerValidation,
  tokenValidation,
  talkValidation,
  watchedAtValidation,
  rateValidation,
  ratePatchValidation,
  queryWatchedAtValidation,
  queryRateValidation,
};
