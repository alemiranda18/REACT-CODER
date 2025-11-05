import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv';
import cartsRouter from './routes/carts.routes.js';
import sessionsRouter from './routes/sessions.routes.js';
import './config/passport.config.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());

// Rutas
app.use('/api/carts', cartsRouter);
app.use('/api/sessions', sessionsRouter);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Conectado a MongoDB');
        app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
    })
    .catch(err => console.error('Error de conexión a MongoDB:', err));