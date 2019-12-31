import * as db from '../config/db'
//const db    = require('../config/db');
const type  = db.sequelize;

export const contatosModel = db.define('pessoas',{
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    Nome:type.STRING
});

//module.exports = contatosModel;
