/** 
 * Aplicativo BackEnd para el manejo de LMS
 * @author: Stived Osorio Vélez
 * Año: 2022
 */

 'use strict';

 require('dotenv').config();
 
 const app = require('./app');
 
 const port = process.env.PORTSERVE;
 const url = process.env.URL;
 
 app.listen(port, ()=>{
     console.log('Server ON');
     console.log('Server listen:',url + ':'+ port);
 })