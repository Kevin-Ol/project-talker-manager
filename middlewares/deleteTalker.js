const fs = require('fs/promises');

exports.deleteTalker = async (req, res, _next) => {
  const { id } = req.params;

  const file = await fs.readFile('talker.json', 'utf8');
  const talkers = JSON.parse(file);

  const talkerOnlist = talkers.some((talker) => talker.id === parseInt(id, 10));

  if (!talkerOnlist) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  const listWithDeletedTalker = talkers.filter((talker) => talker.id !== parseInt(id, 10));

  await fs.writeFile('talker.json', JSON.stringify(listWithDeletedTalker));

  return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
};
