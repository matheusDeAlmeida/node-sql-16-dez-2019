//import {fatorial} from '../config/server'
import {server} from '../config/server'
//const router   = require('../config/server').server;
const service  = require('../services/pessoas');

server.get('/pessoas', (request, response, next) => {    
    service.buscarPessoas().then(data => {
        response.send(200, data);
    }).catch(err => {
        response.send(503, err);
    })
    next();
});

router.post('/insertPessoa', (request, response, next) => {
    service.insertPessoa(request.body).then(data => {
        response.send(200, 'Pessoa inserida com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.put('/updatePessoa', (request, response, next) => {
    service.updatePessoa(request.body).then(data => {
        response.send(200, 'Pessoa atualizada com sucesso');
    }).catch(err => {
        response.send(400, err);
    })
    next();
});

router.del('/deletePessoa', (request, response, next) => {
    service.deletePessoa(request.body).then(data => {        
        response.send(200, retornos(true, 'Pessoa excluída com sucesso',data));
    }).catch(err => {
        response.send(400, retornos(false, 'falha ao excluída com sucesso',err));
    })
    next();
});

function retornos(success, msg, data){    
    const retorno = {
        success: success,
        message: msg,
        details: data
    }        
    return retorno;
}

module.exports = router;
