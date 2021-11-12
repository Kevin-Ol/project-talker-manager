const fs = require('fs/promises');

exports.createTalker = async (req, res, _next) => {
  const { name, age, talk } = req.body;

  const file = await fs.readFile('talker.json', 'utf8');
  const talkers = JSON.parse(file);

  const lastId = talkers[talkers.length - 1].id;
  const newTalker = { id: lastId + 1, name, age, talk };
  await fs.writeFile('talker.json', JSON.stringify([...talkers, newTalker]));

  return res.status(201).json(newTalker);
};
