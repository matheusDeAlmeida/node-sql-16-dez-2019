//https://sequelize.org/master/manual/typescript.html
import {sequelize} from '../config/db'
const type  = sequelize;

export const contatosModel = sequelize.define('pessoas',{
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    Nome:type.STRING
});

//module.exports = contatosModel;
