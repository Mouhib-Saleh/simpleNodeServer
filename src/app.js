const express = require('express');
const app = express();
const userRoutes = require('./routes/UserRoutes');

const utilsMiddleware = require('./middlewares/utils');
app.use(utilsMiddleware);
// Middleware pour analyser les données JSON
app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenue dans votre serveur structuré !');
});
module.exports = app;