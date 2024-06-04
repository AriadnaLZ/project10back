const { login, register, getUsers, getUserById, updateUser } = require("../controllers/user");

const usersRouter = require('express').Router()

usersRouter.get('/', getUsers)
usersRouter.get('/:id', getUserById)
usersRouter.post('/register', register)
usersRouter.post('/login', login)
usersRouter.put('/:id', updateUser)

module.exports = usersRouter