'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// const jsonServer = require('json-server')

// const jsonServer = new jsonServer()

// const jsonServer = require('json-server')
// const apiServer = jsonServer.create()
// const apiRouter = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()

// apiServer.use(middlewares)
// apiServer.use('/api', apiRouter)
// apiServer.listen(8081, () => {
//   console.log('JSON Server is running')
// })

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
