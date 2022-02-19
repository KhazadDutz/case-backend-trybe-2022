# case-backend-trybe-2022

## CRUD - API REST
Neste repositório constará o CRUD de uma API REST de um blog.
O qual será possível criar um usuário, realizar o login desse usuário, criar/resgatar/alterar/deletar postagens.
Foi utilizado alguns dos princípios do SOLID.
A arquitetura utilizada foi o MSC, Models/Services/Controllers.
A API foi construída utilizando Node.js.
A comunicação com o DB é através do Sequelize
O DB utilizado foi o MySQL.

## Instalação e Execução da API
Para baixar e utilizar a API:
1. Clone o repositório
  * `git clone git@github.com:KhazadDutz/case-backend-trybe-2022.git`
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd case-backend-trybe-2022`

2. Instale as dependências:
  * `npm install`

3. Modifique as informações das variáveis de ambiente no arquivo .env:
  * `PORT=3000 (ou a porta que desejar)`
  * `JWT_SECRET=theanswerisforthytwo (ou a senha que desejar)`
  * `MYSQL_USER=mauricio (seu usuario do MySQL)`
  * `MYSQL_PASSWORD=senha123456 (sua respectiva senha de usuario do MySQL)`
  * `HOSTNAME=localhost`

4. Rode a aplicação:
  * `npm start`

5. Utilize o Postman ou similares para realizar as requisições;

## As rotas disponíveis para utilização:
### Rotas para user:
  * Endpoint POST - `http://localhost:3000/user`
  * Endpoint GET - `http://localhost:3000/user/:id`
  * Endpoint GET - `http://localhost:3000/user`
  * Endpoint DELET - `http://localhost:3000/user/me`
### Rotas para post:
  * Endpoint POST - `http://localhost:3000/post`
  * Endpoint GET - `http://localhost:3000/post/search`
  * Endpoint GET - `http://localhost:3000/post/:id`
  * Endpoint PUT - `http://localhost:3000/post`
  * Endpoint DELETE - `http://localhost:3000/:id`
### Rotas para login:
  * Endpoint POST - `http://localhost:3000/login`
