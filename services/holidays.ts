const model = require('../models/holidaysModel');

function findHolidays(skip, limit){
    return new Promise((resolve, reject) => {
        model.findAll({
            offset:skip,limit:limit
        }).then(res => {
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao buscar feriados: ${err};`);
            reject(err);
        })
    });
}

function insertHoliday(data){
    return new Promise((resolve, reject) =>{
        model.create(data).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao inserir o feriado: ${err};`);
            reject(err);
        })
    });
}

function updateHoliday(data){
    return new Promise((resolve, reject) =>{
        model.update(data, {
            where: { id:data.id }
        }).then(res => {
            resolve(res);
        }).catch(err => {
            console.log(`erro ao editar o feriado: ${err};`);
            reject(err);
        })
    });
}

function deleteHoliday(data){
    return new Promise((resolve, reject) => {       
        model.destroy({where:{ id:data.id}}).then(res => {           
            resolve(res);
        }).catch(err => {            
            console.log(`erro ao excluir o feriado: ${err};`);
            reject(err);
        });
    });
}

module.exports = {findHolidays, insertHoliday, updateHoliday, deleteHoliday};

