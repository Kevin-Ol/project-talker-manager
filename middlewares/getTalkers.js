const fs = require('fs/promises');

exports.getTalkers = async (_req, res, _next) => {
  const file = await fs.readFile('talker.json', 'utf8');
  const talkers = JSON.parse(file);

  if (!talkers) {
    return res.status(200).json([]);
  }

  return res.status(200).json(talkers);
};
