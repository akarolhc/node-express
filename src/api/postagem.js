const controller = require('../controller/postagem');

class PostagemApi {
    async criarPostagem(req, res) {
        const titulo = req.body.titulo
        const conteudo = req.body.conteudo;

        try {
            const postagem = await controller.criarPostagem(titulo, conteudo);
            return res.status(201).send(postagem);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarPostagem(req, res) {
        const { id } = req.params;
        const { titulo, conteudo } = req.body;

        try {
            const postagem = await controller.alterarPostagem(Number(id), titulo, conteudo);
            return res.status(200).send(postagem);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarPostagem(req, res) {
        const { id } = req.params;

        try {
            await controller.deletarPostagem(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarPostagem(req, res) {

        try {
            const users = await controller.listarPostagem();
            return res.status(200).send(users);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = new PostagemApi();