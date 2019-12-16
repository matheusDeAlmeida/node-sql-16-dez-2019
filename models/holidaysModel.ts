const db    = require('../config/db');
const type  = db.Sequelize;

let holidaysModel = db.define('holidays',{
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    Nome:type.STRING
});

module.exports = holidaysModel;