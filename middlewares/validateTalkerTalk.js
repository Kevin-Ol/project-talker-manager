const { validateTalkFields } = require('../helpers/validateTalkFields');
const { validateTalkContent } = require('../helpers/validateTalkContent');

exports.validateTalkerTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(400).json({ 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }

  const emptyFields = validateTalkFields(talk);
  if (!talk || emptyFields) {
    return res.status(400).json({ 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }

  const validContent = validateTalkContent(talk);

  if (validContent) return res.status(400).json({ message: validContent });

  next();
};
