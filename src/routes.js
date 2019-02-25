const express = require('express')

const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/', (req, res) => {
  res.send('<h1>Hello Teste!!!</h1>')
})

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

module.exports = routes
