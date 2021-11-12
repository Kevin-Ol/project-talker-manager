const { getTalkers } = require('./getTalkers');
const { getOneTalker } = require('./getOneTalker');
const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');
const { login } = require('./login');
const { validateToken } = require('./validateToken');
const { validateTalkerName } = require('./validateTalkerName');
const { validateTalkerAge } = require('./validateTalkerAge');
const { validateTalkerTalk } = require('./validateTalkerTalk');
const { createTalker } = require('./createTalker');
const { editTalker } = require('./editTalker');
const { deleteTalker } = require('./deleteTalker');
const { searchTalker } = require('./searchTalker');

module.exports = {
  getTalkers,
  getOneTalker,
  validateEmail,
  validatePassword,
  login,
  validateToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalk,
  createTalker,
  editTalker,
  deleteTalker,
  searchTalker,
};
