function queryWatchedAtValidation(req, res, next) {
  const { date } = req.query;
  if (!date) {
    return next();
  }

  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.test(date)) {
    return res
      .status(400)
      .json({ message: 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
}

function queryRateValidation(req, res, next) {
  const { rate } = req.query;
  if (!rate) {
    return next();
  }

  const rateNumber = Number(rate);

  if (!Number.isInteger(rateNumber) || rateNumber < 1 || rateNumber > 5) {
      return res
      .status(400)
      .json({
        message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
      });
  }

  next();
}

module.exports = { queryWatchedAtValidation, queryRateValidation };