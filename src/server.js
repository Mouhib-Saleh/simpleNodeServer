const app = require('./app');
const dotenv = require('dotenv');
// Chargement des variables d'environnement
dotenv.config();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});