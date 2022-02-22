// const sinon = require("sinon");
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../index");
// const validations = require("../../middlewares");

chai.should();
chai.use(chaiHttp);

// - Cadastra um usuário no banco de dados:
//  - Verifica os dados enviados:
//   - Verifica se o campo displayName existe:
//     - Em caso de falha:
//       - deve retornar um http status 400
//       - deve retornar um json { "message": "'displayName' is required" }

//   - Verifica se o campo 'displayName' conteḿ um displayName com no mínimo 8 caracteres:
//     - Em caso de falha:
//       - deve retornar http status 400
//       - deve retornar um json { "message": "'displayName' lenght must be at least 8 characters long" }
//   - Verifica se o campo 'email' existe:
//     - Em caso de falha:
//       - deve retornar um http status 400
//       - deve retornar um json { "message": "'email' is required" }
//   - Verifica se o campo 'email' com formato 'khazad' é válido:
//     - Em caso de falha:
//       - deve retornar um http status 400
//       - deve retornar um json { "message": "'email' must be a valid email" }
//   - Verifica se o campo 'email' com formato '@gmail.com' é válido:
//     - Em caso de falha:
//       - deve retornar um http status 400
//       - deve retornar um json { "message": "'email' must be a valid email" }
//   - Verifica se o campo 'password' existe:
//     - Em caso de falha:
//       - deve retornar um http status 400
//       - deve retornar um json { "message": "'password' is required" }
//   - Verifica se o campo 'password' contém uma senha com menos de 6 caracteres:
//     - Em caso de falha:
//       - deve retornar um http status 400
//       - deve retornar um json { "message": "'password' length must be 6 characters long" }
//   - Verifica se o usuário já existe:
//     - Em caso de já existir um cadastro com o mesmo email:
//       - deve retornar um http status 409
//       - deve retornar um json { "message": "usuário já existe" }
//  - Em caso de sucesso:
//   - deve retornar um http status 201
//   - deve retornar um token JWT

describe("Cadastra um usuário no banco de dados", () => {
  describe("Verifica os dados enviados", () => {
    describe('Verifica se o campo "displayName" existe', () => {
      // before(() => {
      //   sinon.stub(validations, "createUserValidations").callsFake(() => {
      //     return (_req, res, _next) => {
      //       return res.status(400).json({ message: '"displayName" is required' });
      //     };
      //   });
      // });
      it("Em caso de falha, deve retornar um http status 400", (done) => {
        const body = {
          email: "Dhunfdsfsd2@Dhun.com",
          password: "123456",
          image: "ImagePath",
        };
        chai
          .request(server)
          .post("/user")
          .send(body)
          .end((err, response) => {
            response.should.have.status(400);
            done();
          });
      });
      // it("Em caso de falha, deve retornar um json com uma mensagem de erro", async () => {});
    });
  });
});
