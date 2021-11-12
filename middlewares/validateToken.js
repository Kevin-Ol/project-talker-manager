exports.validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const regexToken = /^[A-Za-z0-9]{16}$/;

  if (!regexToken.test(authorization)) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  next();
};
