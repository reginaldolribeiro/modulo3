const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')

/* const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController') */

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)
routes.get('/users', controllers.UserController.index)

/* routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true })) */

routes.use(authMiddleware)

routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

module.exports = routes
