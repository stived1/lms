'use strict';

// Cargamos la configuración de la base de datos:
const conn = require('../config/database/conex');
let momento = require('moment');
let estados= require('../config/util/estados');

function userTest(req, res){
    let ahora = momento().format('LTS');
    res.status(200).send({
        Estado : estados.m200,
        prueba: 'Accediendo a la ruta de prueba de Usuarios',
        HoraActual : ahora,
        feedback : estados
    })
}

/* *********************************** Controles de Usuario *********************************** */
function loginUser(req, res){

}

// Exportar:
module.exports = {
    userTest
}