const mongoose = require('mongoose');
require('dotenv').config();
// Se connecter à MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connexion à MongoDB réussie !');
    } catch (error) {
        console.error('Erreur de connexion :', error);
        process.exit(1); // Quitter le processus en cas d'erreur
    }
};
module.exports = connectDB;