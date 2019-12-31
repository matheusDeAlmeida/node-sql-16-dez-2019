"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
//import {restify} from 'restify'
exports.port = 3000;
exports.server = restify.createServer();
exports.server.use(restify.plugins.bodyParser({
    mapParams: true,
    mapFiles: false,
    overrideParams: false
}));
//module.exports = {server, port};
