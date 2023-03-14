const ageValidation = (age) => !Number.isInteger(age) || Number(age) < 18;

function talkerValidation(req, res, next) {
  const { name, age } = req.body;

  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) {
    return res.status(400).json(
      { message: 'O "name" deve ter pelo menos 3 caracteres' },
    ); 
  }

  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (ageValidation(age)) {
    return res.status(400).json(
      { message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' },
    );
  }

  next();
}

module.exports = talkerValidation;