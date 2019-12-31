import * as restify from 'restify'
export const port      = 3000
export const server    = restify.createServer()

server.use(restify.plugins.bodyParser({
    mapParams:true,
    mapFiles:false,
    overrideParams: false
}))
