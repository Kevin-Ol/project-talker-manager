const express = require('express');
const talkerRouter = require('./routes/talker');
const { login, validateEmail, validatePassword } = require('./middlewares');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/login', [validateEmail, validatePassword, login]);

app.use('/talker', talkerRouter);

app.listen(PORT, () => {
  console.log('Online');
});
