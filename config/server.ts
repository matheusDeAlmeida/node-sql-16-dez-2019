import * as restify from 'restify'
//import {restify} from 'restify'
export const port      = 3000;
export const b    = restify.createServer();

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}));

//module.exports = {server, port};
