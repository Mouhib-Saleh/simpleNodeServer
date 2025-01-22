const userService = require('../services/userService');

const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
}
const test = (req, res) => {
    res.json("api fonctionelle");
}
const getUserById = (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = userService.getUserById(userId);
    if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
}

module.exports = { getAllUsers, test, getUserById };