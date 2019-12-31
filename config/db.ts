import {Sequelize} from 'sequelize'
//const type  = db.Sequelize;

//criação do client conexão
export const sequelize = new Sequelize('contatos', 'matheus', 'password', {
    host:"localhost",
    port:3306,
    dialect:'mysql',
    define:{
        timestamps: false
    }
})

//module.exports = sequelize;
