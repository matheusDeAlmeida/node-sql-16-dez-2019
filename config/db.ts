const Sequelize = require('sequelize');

//criação do client conexão
const sequelize = new Sequelize('contatos', 'matheus', 'password', {
    host:"localhost",
    port:3306,
    dialect:'mysql',
    define:{
        timestamps: false
    }
})

module.exports = sequelize;
