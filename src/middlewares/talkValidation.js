function talkValidation(req, res, next) {
  const { talk } = req.body;

  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }

  next();
}

// https://www.regextester.com/99555
function watchedAtValidation(req, res, next) {
  const {
    talk: { watchedAt },
  } = req.body;
  if (!watchedAt) {
    return res
      .status(400)
      .json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  const dateRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.test(watchedAt)) {
    return res
      .status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
}

function rateValidation(req, res, next) {
  const {
    talk: { rate },
  } = req.body;

  if (rate === undefined) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
      return res
      .status(400)
      .json({
        message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
      });
  }

  next();
}

module.exports = { talkValidation, watchedAtValidation, rateValidation };
