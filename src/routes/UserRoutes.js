const express = require('express');
const router = express.Router();

const { getAllUsers, test, getUserById } = require('../controllers/userController');
// Routes utilisateur
router.get('/', getAllUsers); // Obtenir tous les utilisateurs
router.get('/test', test);
router.get('/:id', getUserById); // Obtenir un utilisateur par son id
module.exports = router;