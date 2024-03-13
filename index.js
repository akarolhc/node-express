const express = require("express");

const app = express();
app.use(express.json());

// CRUD USUÁRIOS
const usuarios = [];

app.get("/", (req, res) => { 
  res.send("Hello World");
});

app.get("/usuario", (req, res) => { // get para pegar as informações
  res.json(usuarios);
});

app.post("/usuario", (req, res) => {  // post para inserir informações
  const { nome, email } = req.body;

  let id = 0;

  for (const usuario of usuarios) {
    if (usuario.id > id) {
      id = usuario.id;
    }
  }

  const usuario = {
    id: id + 1,
    nome,
    email,
  };
  usuarios.push(usuario);

  res.status(201).json(usuario);
});

app.put("/usuario/:id", (req, res) => { // put para modificar as informações
  const { id } = req.params; 
  const { nome, email } = req.body;

  const index = usuarios.findIndex((u) => u.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  usuarios[index] = {
    id: Number(id),
    nome,
    email,
  };

  res.status(200).json(usuarios[index]);
});

app.delete("/usuario/:id", (req, res) => { // delete para deletar as informações
  const { id } = req.params;

  const index = usuarios.findIndex((u) => u.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  usuarios.splice(index, 1);

  res.status(204).send();
});

//----------------------------------------------------------------------------------//
//postagem

const postagens = [];

app.get("/postagens", (req, res) => {
  res.json(postagens);
});

app.post("/postagens", (req, res) => {
  const { nome, email } = req.body;
});
let id = 0;

for (const postagem of postagens) {
  if (postagem.id > id) {
    id = postagem.id;
  }

  const postagens = {
    id: id + 1,
    nome,
    email,
  };
  postagens.push(postagem);

  res.status(201).json(postagem);
}

app.put("/postagens/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  const index = postagens.findIndex((u) => u.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  postagens[index] = {
    id: Number(id),
    nome,
    email,
  };

  res.status(200).json(postagens[index]);
});

app.delete("/postagens/:id", (req, res) => {
  const { id } = req.params;

  const index = postagens.findIndex((u) => u.id === Number(id));

  if (index === -1) {
    return res.postagens(404).json({ error: "Usuário não encontrado" });
  }

  postagens.splice(index, 1);

  res.status(204).send();
});

// rota criada para procurar dentro do array a postagem de um usuário pelo id do autor da postagem

app.get("/postagens/autor/:id", (req, res) => {
  const { id } = req.params;

  const postagensIndex = postagens.findIndex((i) => i.autorId === id);

  if (postagensIndex === -1) {
    res.status(404).json({ error: "Postagem not found" });
    return;  
  } // se o id procurado não for retornado da maneira correta, retorna uma mensagem de erro

  res.status(200).json(postagens[postagensIndex]);
  return;
}); // se o id procurado for retornado da maneira correta, retorna uma mensagem de sucesso

app.listen(3000, () => console.log("Server started"));
