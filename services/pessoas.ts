import {contatosModel} from '../models/pessoasModel'

export function buscarPessoas(skip, limit){
    return new Promise((resolve, reject) => {
        contatosModel.findAll({
            offset:skip,limit:limit
        }).then(res => {
            resolve(res)
        }).catch(err => {            
            console.log(`erro ao buscar pessoas: ${err}`)
            reject(err)
        })
    })
}

export function insertPessoa(data){
    return new Promise((resolve, reject) =>{
        contatosModel.create(data).then(res => {
            resolve(res)
        }).catch(err => {
            console.log(`erro ao inserir a pessoa: ${err}`)
            reject(err)
        })
    })
}

export function updatePessoa(data){
    return new Promise((resolve, reject) =>{
        contatosModel.update(data, {
            where: { id:data.id }
        }).then(res => {
            resolve(res)
        }).catch(err => {
            console.log(`erro ao editar a pessoa: ${err}`)
            reject(err)
        })
    })
}

export function deletePessoa(data){
    return new Promise((resolve, reject) => {       
        contatosModel.destroy({where:{ id:data.id}}).then(res => {           
            resolve(res)
        }).catch(err => {            
            console.log(`erro ao excluir a pessoa: ${err}`)
            reject(err)
        })
    })
}

//module.exports = {buscarPessoas, insertPessoa, updatePessoa, deletePessoa}

