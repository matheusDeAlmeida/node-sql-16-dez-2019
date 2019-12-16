const db    = require('../config/db');
const type  = db.Sequelize;

//adicionar relacionamento hasmany
//https://medium.com/@edtimmer/sequelize-associations-basics-bde90c0deeaa
let calendarsModel = db.define('calendars',{
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    Nome:type.STRING
});

let holidaysModel = db.define('holidays',{
    id:{
        type: type.INTEGER,
        primaryKey: true
    },
    Nome:type.STRING
});

module.exports = holidaysModel;