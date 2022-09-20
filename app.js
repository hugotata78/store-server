const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const pack = require('./package.json')
const indexRoutes = require('./routes')
const app = express()



app.set('Server','Servidor')
app.set('port',process.env.PORT || 4000)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api',indexRoutes)


app.get('/',(req,res)=>{
    res.json({
        nombre:pack.name,
        autor:pack.author,
        versión:pack.version
    })
})

module.exports = app