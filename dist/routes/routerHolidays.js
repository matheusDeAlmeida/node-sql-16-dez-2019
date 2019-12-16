const router = require('../config/server').server;
const service = require('../services/holidays');
router.get('/holidays', (request, response, next) => {
    service.findHolidays().then(data => {
        response.send(200, data);
    }).catch(err => {
        response.send(503, err);
    });
    next();
});
router.post('/insertHoliday', (request, response, next) => {
    service.insertHoliday(request.body).then(data => {
        response.send(200, 'Feriado inserido com sucesso');
    }).catch(err => {
        response.send(400, err);
    });
    next();
});
router.put('/updateHoliday', (request, response, next) => {
    service.updateHoliday(request.body).then(data => {
        response.send(200, 'Feriado atualizada com sucesso');
    }).catch(err => {
        response.send(400, err);
    });
    next();
});
router.del('/deleteHoliday', (request, response, next) => {
    service.deleteHoliday(request.body).then(data => {
        response.send(200, retornos(true, 'Feriado excluído com sucesso', data));
    }).catch(err => {
        response.send(400, retornos(false, 'falha ao excluir', err));
    });
    next();
});
function retornos(success, msg, data) {
    const retorno = {
        success: success,
        message: msg,
        details: data
    };
    return retorno;
}
module.exports = router;
