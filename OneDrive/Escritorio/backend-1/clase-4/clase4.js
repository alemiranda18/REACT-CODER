// ejemplo video cracion usuario basico
/*
const http = require('http')

const server = http.createServer((request, response) => {
    response.end("hello world")
})
server.listen(8080, () => {
    console.log("servidor creado de manera correcta")
}) */

// Metodo http con express
/*
const express = require('express')
const app = express()
const port = 8080

//middleware para trabajar con  datos JSON
app.use(express.json())



app.get('/', (req, res) => {
    res.json('hello world')
})

app.post('/', (req, res) => {
    res.json('hello world')
})
app.put('/', (req, res) => {
    res.json('hello world')
})
app.delete('/', (req, res) => {
    res.json('hello world')
})

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})
 */

//EJERCICIOS DE CLASE EN VIVO 1 DE JULIO
//metodo sin express
/* const http = require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'get' && req.url === '/usuario') {
        res.writeHead(200)
        res.end('hola a todos ')
    }
    else {
        res.writeHead(404)
        res.end('esta url no esta definida en nuestro servidor')
    }
})
server.listen(8080, () => {
    console.log('mi primer servidor esta escuchando el 8080')
}) */


//ejemplo de clase con express
/* import express from 'express'
const app = express()
app.get = ('\saludo', (req, res) => {
    res.status(200).send('hola a todos')
})
app.listen(8080, () => {
    console.log('mi primer servidor esta escuchando el 8080')
}) */

//ejemplo de actividad en clase 

/* const express = require('express')
const app = express()
app.get('/bievenida', (req, res) => {
    res.status(200).send('<h1 style="color: blue">bienvenidos</h1>')
})
app.get('/usuario', (req, res) => {
    const user = {
        nombre: alejandro,
        apellido: miranda,
        edad: 30,
    }
    res.json(user)
})
app.listen(8080, () => {
    console.log('mi primer servidor esta escuchando el 8080')
}) */


//ejercicio ejemplo en clase de params

/* const express = require('express')
const app = express()
const usuarios = [
    { id: "1", nombre: "ale", apellido: "miranda", edad: 30 },
    { id: "2", nombre: "marina", apellido: "cabrera", edad: 16 },
    { id: "3", nombre: "debora", apellido: "olguin", edad: 49 }
]
app.get('/usuarios', (req, res) => {
    console.log(req.params)
    res.json(usuarios)
})
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const usuario = usuarios.find(u => u.id === id)
    if (!usuario) {
        res.status(404).json({ error: 'usuario no encontrado' })
    }
    else {
        res.json(usuarios)
    }
})
app.listen(8080, () => {
    console.log('mi primer servidor esta escuchando el 8080')
}) */

//ejemplo ejercicio en clase de req.query
/* 
const express = require('express')
const app = express()
const usuarios = [
    { id: "1", nombre: "ale", apellido: "miranda", edad: 30, genero: "m" },
    { id: "2", nombre: "marina", apellido: "cabrera", edad: 16, genero: "f" },
    { id: "3", nombre: "debora", apellido: "olguin", edad: 49, genero: "f" }
]
app.get('/usuarios', (req, res) => {
    const { genero } = req.query
    let usuariosFiltrados = usuarios
    if (genero) {
        usuariosFiltrados.filter(u => u.genero === genero)
    }
    res.json(usuariosFiltrados)
})
app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id
    const usuario = usuarios.find(u => u.id === id)
    if (!usuario) {
        res.status(404).json({ error: 'usuario no encontrado' })
    }
    else {
        res.json(usuarios)
    }
})
app.listen(8080, () => {
    console.log('mi primer servidor esta escuchando el 8080')
}) */

//ejemplo servidor con get post put delete

import express from 'express'

const app = express()
const user = [{
    nombre: marcos
}
    , {
    nombre: alejandro
}
]

app.get('8080', (req, res) => {
    res.status(200).send('<h1>hola a todos</h1>')
})

app.get('8080', (req, res) => {
    res.status(200).send()
})

const port = 8080
app.listen = (port, () => {
    console.log(`mi primer servidor esta escuchando el ${port}`)
})
