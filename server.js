const http = require('http')
const { env } = require('process')
const app = require('./app')
const port = process.env.PORT || env.PORT
const server = http.createServer(app)
server.listen(port)
