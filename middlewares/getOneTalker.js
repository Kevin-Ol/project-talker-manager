const fs = require('fs/promises');

exports.getOneTalker = async (req, res, _next) => {
  const { id } = req.params;

  const file = await fs.readFile('talker.json', 'utf8');
  const talkers = JSON.parse(file);
  const oneTalker = talkers.find((talker) => talker.id === parseInt(id, 10));

  if (!oneTalker) {
    return res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }

  return res.status(200).json(oneTalker);
};
