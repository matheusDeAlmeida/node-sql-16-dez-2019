"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require("../config/db");
//const db    = require('../config/db');
const type = db.sequelize;
exports.contatosModel = db.define('pessoas', {
    id: {
        type: type.INTEGER,
        primaryKey: true
    },
    Nome: type.STRING
});
//module.exports = contatosModel;
