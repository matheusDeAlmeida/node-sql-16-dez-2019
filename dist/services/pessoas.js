"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const model = require('../models/pessoasModel');
const pessoasModel_1 = require("../models/pessoasModel");
function buscarPessoas(skip, limit) {
    return new Promise((resolve, reject) => {
        pessoasModel_1.contatosModel.findAll({
            offset: skip, limit: limit
        }).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao buscar pessoas: ${err};`);
            reject(err);
        });
    });
}
function insertPessoa(data) {
    return new Promise((resolve, reject) => {
        pessoasModel_1.contatosModel.create(data).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao inserir a pessoa: ${err};`);
            reject(err);
        });
    });
}
function updatePessoa(data) {
    return new Promise((resolve, reject) => {
        pessoasModel_1.contatosModel.update(data, {
            where: { id: data.id }
        }).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao editar a pessoa: ${err};`);
            reject(err);
        });
    });
}
function deletePessoa(data) {
    return new Promise((resolve, reject) => {
        pessoasModel_1.contatosModel.destroy({ where: { id: data.id } }).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao excluir a pessoa: ${err};`);
            reject(err);
        });
    });
}
module.exports = { buscarPessoas, insertPessoa, updatePessoa, deletePessoa };
