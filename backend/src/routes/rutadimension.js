'use strict';

// Cargar Express:
const express = require('express');
// Cargar Router de express:
const api = express.Router();

// Cargar el control:
const dimensionControl = require('../controllers/controldimension');

// Rutas:
api.get('/testdimension', dimensionControl.dimensionTest);
api.get('/tipousuarios', dimensionControl.getTipoUser);
api.get('/tipodocumentoid', dimensionControl.getTipoDocumento);
api.get('/generos', dimensionControl.getGenero);

// exportar ruta:
module.exports = api;