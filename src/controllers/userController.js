const users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bob' }
]

const getAllUsers = (req, res) => {
    res.json(users);
}
const test = (req, res) => {
    res.json("api fonctionelle");
}
module.exports = { getAllUsers, test };