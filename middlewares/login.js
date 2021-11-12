const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

exports.login = (_req, res, _next) => res.status(200).json({ token: generateToken() });
