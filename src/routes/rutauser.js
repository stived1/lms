/**
 * Archivo de rutas de usuario
 * @author: Stived Osorio
 * Año: 2022
 */
'use strict';

// Cargar Express:
const express = require('express');
// Cargar el control:
const userControl = require('../controllers/controluser'); 
// Cargar Router de express:
const api = express.Router();

// Rutas:
api.get('/testuser', userControl.userTest);


module.exports = api;