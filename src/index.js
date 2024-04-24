const express = require("express");
const userApi = require('./api/user');
const postagemApi = require('./api/postagem');
const db = require('./config/database');

console.log('Starting server....')
const app = express();
app.use(express.json());

// CRUD USUÁRIOS
const usuarios = [];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post('/login', userApi.login);
app.post('/users', userApi.criarUsuario);
// Aplica a validação do token para as rotas abaixo
app.use(userApi.validarToken);
app.get('/users', userApi.listarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);

app.post('/postagem', postagemApi.criarPostagem);
app.get('/postagem', postagemApi.listarPostagem);
app.put('/postagem/:id', postagemApi.alterarPostagem);
app.delete('/postagem/:id', postagemApi.deletarPostagem);

db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });



