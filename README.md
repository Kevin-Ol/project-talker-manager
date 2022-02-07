# Projeto Talker Manager

Projeto feito como critério avaliativo na escola de programação **Trybe**.

O projeto é uma API criada utilizando Node.JS juntamente com o pacote Express.JS para a criação das rotas. Trata-se de uma API de palestras, capaz de criar, visualizar,
alterar ou deletar as palestras que estão cadastradas em um arquivo json no repositório. Nele aprendi como criar módulos em Node.JS, como ler e escrever em arquivos locais,
como funcionam os verbos e os códigos http, como trabalhar com os objetos de requisição e resposta e a criação de rotas e middlewares com Express.JS.

## Instruções para reproduzir o projeto

1. Clone o repositório
  * `git clone git@github.com:Kevin-Ol/project-talker-manager.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd project-talker-manager`

2. Instale as dependências
  * `npm install`

---

## Rotas

### Endpoint GET `/talker`

- O endpoint retorna um array com todas as pessoas palestrantes cadastradas com o seguinte corpo:

```json
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
```

- Caso não exista nenhuma pessoa palestrante cadastrada o endpoint retorna um array vazio.


### Endpoint GET `/talker/:id`

- O endpoint retorna uma pessoa palestrante com base no id da rota com o seguinte corpo:
  ```json
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
  ```

- Caso não seja encontrada uma pessoa palestrante com base no id da rota, o endpoint retorna o `status 404` com o seguinte corpo:

  ```json
  {
    "message": "Pessoa palestrante não encontrada"
  }
  ```

### Endpoint POST `/login`

- O endpoint retorna um token aleatório de 16 caracteres que deverá ser utilizado nas demais requisições com o seguinte corpo:

  ```json
  {
    "token": "7mqaVRXJSp886CGr"
  }
  ```

- O corpo da requisição deve ter o seguinte formato:

  ```json
  {
    "email": "email@email.com",
    "password": "123456"
  }
  ```

- O campo `email` deve ser um email válido. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"email\" é obrigatório"
    }
    ```

  - Caso o email passado não seja um email válido retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"email\" deve ter o formato \"email@email.com\""
    }
    ```

- O campo `password` deverá ter pelo menos 6 caracteres.

  - Caso o campo não seja passado ou esteja vazio retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"password\" é obrigatório"
    }
    ```

  - Caso a senha não tenha pelo menos 6 caracteres retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"password\" deve ter pelo menos 6 caracteres"
    }
    ```

### Endpoint POST `/talker`

- O endpoint é capaz de adicionar uma nova pessoa palestrante ao arquivo;

- O corpo da requisição deve ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorna um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorna um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deve ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deve ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso a pessoa palestrante não tenha pelo menos 18 anos retorna `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "A pessoa palestrante deve ser maior de idade"
    }
    ```

- O campo `talk` deve ser um objeto com as seguintes chaves:

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` retorna `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorna `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `talk` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informado, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorna `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios"
      }
      ```
- Caso esteja tudo certo, retorna o `status 201`  e a pessoa cadastrada da seguinte forma:

  ```json
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

### Endpoint PUT `/talker/:id`

- O endpoint é capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

- O corpo da requisição deve ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```
  
- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorna um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorna um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"name\" ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deve ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorna um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso a pessoa palestrante não tenha pelo menos 18 anos retorna `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "A pessoa palestrante deve ser maior de idade"
    }
    ```

- O campo `talk` deve ser um objeto com as seguintes chaves:

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeito o formato `dd/mm/aaaa` retorna `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
    }
    ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorna `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

  - O campo `talk` é obrigatório e nenhuma das chaves citadas anteriormente podem ser vazias.

    - Caso o campo não seja informado, esteja vazio ou então alguma de suas chaves não tenham sido informadas retorna `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"talk\" é obrigatório e \"watchedAt\" e \"rate\" não podem ser vazios"
      }
      ```
- Caso esteja tudo certo, retorne o `status 200` e a pessoa editada da seguinte forma:

  ```json
  {
    "id": 1,
   "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 4
    }
  }
  ```

### Endpoint DELETE `/talker/:id`

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorna um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorna um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O endpoint deleta uma pessoa palestrante com base no id da rota, retornando o `status 200`, com o seguinte corpo:

  ```json
  { "message": "Pessoa palestrante deletada com sucesso" }
  ```


### Endpoint GET `/talker/search?q=searchTerm`


- O endpoint retorna um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL com o seguinte corpo:

  ```
  /search?q=Da
  ```

  ```json
  [
    {
      "id": 1,
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5,
      },
    }
  ]
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorna um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorna um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint retorna um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.

- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint retorna o `status 200` e um array vazio.
