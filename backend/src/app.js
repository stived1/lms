 /** 
 * Aplicativo BackEnd para el manejo de LMS
 * @author: Stived Osorio Vélez
 * Año: 2022
 */

'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();
// routes:
const userRoutes = require('./routes/rutauser'); 


// Middlewares:
app.use (express.urlencoded({ extended : false }));
app.use(express.json());
app.use(morgan('dev'));

// cors:
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested_With, Content-Type, Accept, Authorization');
    next();
});

// Exports routes:
app.use('/api', userRoutes);


// Export Server:
module.exports = app;