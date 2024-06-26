const postagem = require('../api/postagem');
const database = require('../config/database');

class Postagem {
    constructor() {
        this.model = database.define('postagem', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.Sequelize.STRING
            },
            conteudo: {
                type: database.Sequelize.STRING
            }
        });
    }
}

module.exports = (new Postagem).model;