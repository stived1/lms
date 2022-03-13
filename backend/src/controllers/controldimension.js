/**
 * Archivo para dimensiones del modelo de datos.
 * Todas las tablas que se deben parametrizar por ser maestros
 */

'use strict';

// Cargamos la configuración de la base de datos:
const conn = require('../config/database/conex');
let momento = require('moment');
let estados= require('../config/util/estados');

function dimensionTest(req, res){
    let ahora = momento().format('LTS');
    res.status(200).send({
        Estado : estados.m200,
        prueba : 'Accediendo a la ruta de prueba de dimensiones',
        HoraActual : ahora,
        feedback : estados
    })
}

/* *********************************** Controles de Dimensiones *********************************** */

function getTipoUser(req,res){
    // Consulta SQL:
    const sql = "SELECT * FROM TipoUsuario";
    // Ejecutar la consulta:
    conn.query(sql,(err, tipousuario)=>{
        if (err) throw err;                                     // Si existe error en la momento de ejecutar la consulta, veremos este error
        if(tipousuario.length >0){                              // Si tenemos al menos un resultado lo mostramos en una doc json:
            return res.status(200).send({
                lista : tipousuario
            });
        }else {
            return res.status(404).send({                       // Si no existe resultado, mostramos error 404
                mensaje: estados.m404
            })
        }
    })
}

function getTipoDocumento(req,res){
    // Consulta SQL:
    const sql = "SELECT * FROM TipoDocumento";
    // Ejecutar la consulta:
    conn.query(sql,(err, tipodocu)=>{
        if (err) throw err;                                     // Si existe error en la momento de ejecutar la consulta, veremos este error
        if(tipodocu.length >0){                                 // Si tenemos al menos un resultado lo mostramos en una doc json:
            return res.status(200).send({
                lista : tipodocu
            });
        }else {
            return res.status(404).send({                       // Si no existe resultado, mostramos error 404
                mensaje: estados.m404
            })
        }
    })
}

function getGenero(req,res){
    // Consulta SQL:
    const sql = "SELECT * FROM Generos";
    // Ejecutar la consulta:
    conn.query(sql,(err, generos)=>{
        if (err) throw err;                                     // Si existe error en la momento de ejecutar la consulta, veremos este error
        if(generos.length >0){                                  // Si tenemos al menos un resultado lo mostramos en una doc json:
            return res.status(200).send({
                lista : generos
            });
        }else {
            return res.status(404).send({                       // Si no existe resultado, mostramos error 404
                mensaje: estados.m404
            })
        }
    })
}

/* *********************************** Exportamos las Funciones: *********************************** */

module.exports = {
    dimensionTest,
    getTipoUser,
    getTipoDocumento,
    getGenero
}