//CLASE 5 HANDLEBARS CON EXPRESS


// EJEMPLO DEL VIDEO CONFIGURACION HANDLEBARS CON EXPRESS
/* const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

// Configurar Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { nombre: 'Juan', mensaje: '¡Bienvenido a Handlebars!' });
});

// Iniciar servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
  */


/* 
import router from "./users.js";
import express from 'express'
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.static('src/public'))

app.use('/api/users', router)

app.listen(PORT, () => {
    console.log("puerto escuchado 8080")
}) */