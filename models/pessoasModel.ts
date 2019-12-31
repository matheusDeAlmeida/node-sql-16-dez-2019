//https://sequelize.org/master/manual/typescript.html
import {db} from '../config/db'
import { INTEGER, STRING } from 'sequelize'

export const contatosModel = db.define('pessoas',{
    id:{
        type: INTEGER,
        primaryKey: true
    },
    Nome: STRING
})
