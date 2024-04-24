const { listarPostagem, criarPostagem, alterarPostagem, deletarPostagem } = require('../api/postagem');
const postagem = require('../models/postagem');
const Postagem = require('../models/postagem');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
const JWT_SECRET_KEY = 'moranguete';

class PostagemController {
    async criarPostagem(titulo, conteudo) {
        if (!titulo || !conteudo) {
            throw new Error('Título e conteúdo são obrigatórios');
        }
        const novaPostagem = await Postagem.create({titulo, conteudo});
        return novaPostagem;
    }

    async buscarPorId(id) {
        if (!id) {
            throw new Error('Id é obrigatório');
        }

        const postagem = await Postagem.findByPk(id);

        if (!postagem) {
            throw new Error('Postagem não encontrada');
        }

        return postagem;
    }

    async alterarPostagem(id, titulo, conteudo) {
        if (!id) {
            throw new Error('ID é obrigatório');
        }
        if (!titulo || !conteudo) {
            throw new Error('Título e conteúdo são obrigatórios');
        }
        const postagem = await this.buscarPorId(id);
        postagem.titulo = titulo;
        postagem.conteudo = conteudo;
        return postagem.save();
    }

    async deletarPostagem(id) {
        if (!id) {
            throw new Error('ID é obrigatório');
        }
        const postagem = await this.buscarPorId(id);
    
        await postagem.destroy();
    }    

    async listarPostagem() {
        return Postagem.findAll();
    }
}

module.exports = new PostagemController();
