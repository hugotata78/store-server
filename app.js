const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.set('Server','Servidor')
app.set('port',process.env.PORT || 4000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

module.exports = app