const express = require('express')
const app = express()

app.use(express.json())

app.use('/api/user', require('./src/routes/user'))

app.use((req, res, next) => {
  res.status(200).send({
    mensagem: 'Ok, Deu certo!'
  })
})

module.exports = app
