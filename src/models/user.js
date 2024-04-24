const { DataTypes } = require('sequelize');
const database = require('../config/database');

class User {
    constructor() {
        this.model = database.define('user', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });
    }
}

module.exports = (new User).model;
