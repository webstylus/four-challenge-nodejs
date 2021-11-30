# 4º Desafio NodeJS Ignite
Quarto Desafio nodejs do curso Ignite da Rocketseat
Testes com Jest e SOLID Pattern aplicada

Documentação criada para as rotas existentes usando [swagger ui express](https://swagger.io/docs/specification/about/)

- Criar usuário
- Tranformar usuário em admin
- Listar usuários somente se for admin
- Exibir perfil do usuário por id


Execute os comandos abaixo para instalar e configurar a aplicação

```bash
    $ yarn install
    $ yarn dev
```

### Swagger UI Express

[Api com documentação local](http://localhost:3333/api-docs)

```bash
    post /users
    get /users (header: user_id)
    get /users/:user_id
    patch /users/:user_id
```

