const express = require('express');
const talkerRouter = require('./routes/talker');
const { login, validateEmail, validatePassword } = require('./middlewares');

const app = express();
app.use(express.json());

const PORT = '3000';

app.post('/login', [validateEmail, validatePassword, login]);

app.use('/talker', talkerRouter);

app.listen(PORT, () => {
  console.log('Online');
});
