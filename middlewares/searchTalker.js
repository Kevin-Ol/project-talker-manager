const fs = require('fs/promises');

exports.searchTalker = async (req, res, _next) => {
  const { q } = req.query;
  const file = await fs.readFile('talker.json', 'utf8');
  let talkers = JSON.parse(file);

  if (q) {
    talkers = talkers.filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()));
  }

  return res.status(200).json(talkers);
};
