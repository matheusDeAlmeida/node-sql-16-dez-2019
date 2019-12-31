import {Sequelize} from 'sequelize'

//criação do client conexão
export const db = new Sequelize('contatos', 'root', 'tokenlab', {
    host:"localhost",
    port:3306,
    dialect:'mysql',
    define:{
        timestamps: false
    }
})
