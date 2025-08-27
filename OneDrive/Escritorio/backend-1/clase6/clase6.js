import handlebars from 'express-handlebars'
import { Server } from 'socket.io'
import viewsRouter from './src/routes/views.router.js'
import express from 'express'

const app = express();

//indico que voy a usarlo 
app.engine('handlebars', handlebars.engine())

//indico el motor que de plantilla que voy a usar 
app.set('view engine', 'handlebars')

//indico donde se escuentra la carpeta de esa plantilla 
app.set('views', './views')

//indico donde se alojan las pag que van a generar handlebars
app.use(express.static('./public'))

app.use('/', viewsRouter)

const httpServer = app.listen(8080, () => {
    console.log("escuchando puerto 8080")
})

const io = new Server(httpServer);

const chatLog = []

io.on('connection', (socket) => {
    console.log("nuevo cliente conectadd")

    socket.on('message', message => {
        chatLog.push(message)
        io.emit('chatLog', chatLog)
    })

})