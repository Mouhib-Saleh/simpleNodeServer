const users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bob' }
]

const getAllUsers = (req, res) => {
    return users
}
const getUserById = (id) => {
    return users.find(user => user.id === id);
}
module.exports = { getAllUsers, getUserById };