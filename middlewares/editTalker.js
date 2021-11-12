const fs = require('fs/promises');

exports.editTalker = async (req, res, _next) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;

  const file = await fs.readFile('talker.json', 'utf8');
  const talkers = JSON.parse(file);

  const editingTalker = talkers.find((talker) => talker.id === parseInt(id, 10));
  
  if (!editingTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  editingTalker.name = name;
  editingTalker.age = age;
  editingTalker.talk = talk;
  await fs.writeFile('talker.json', JSON.stringify(talkers));

  return res.status(200).json(editingTalker);
};
