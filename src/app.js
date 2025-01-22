const express = require('express');
const app = express();
const userRoutes = require('./routes/UserRoutes');
const EventEmitter = require('events');
const connectDB = require('../config/db');

const utilsMiddleware = require('./middlewares/utils');
app.use(utilsMiddleware);
// Middleware pour analyser les données JSON
app.use(express.json());
app.use('/api/users', userRoutes);

const eventEmitter = new EventEmitter();
// Définir un écouteur pour un événement
eventEmitter.on('salut', (nom) => {
    console.log(`Salut, ${nom} !`);
})

eventEmitter.emit('salut', 'Alice');

eventEmitter.once('connection', () => {
    console.log('Bienvenue dans votre serveur structuré !');
});

eventEmitter.emit('connection');
//eventEmitter.emit('connection');
connectDB();
app.get('/', (req, res) => {
    res.send('Bienvenue dans votre serveur structuré !');
});
module.exports = app;