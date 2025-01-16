const express = require('express');
const router = express.Router();

const { getAllUsers, test } = require('../controllers/userController');
// Routes utilisateur
router.get('/', getAllUsers); // Obtenir tous les utilisateurs
router.get('/test', test);
module.exports = router;