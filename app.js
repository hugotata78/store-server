const express = require('express')
const cors = require('cors')
//const morgan = require('morgan')
const pack = require('./package.json')
const indexRoutes = require('./routes')
const app = express()



app.set('Server','Servidor')
app.set('port',process.env.PORT || 4000)

// app.use(cors({
//     origin:`${process.env.HOST}:${app.get('port')}`
// }))
//app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api',indexRoutes)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/',(req,res)=>{
    res.json({
        nombre:pack.name,
        autor:pack.author,
        versión:pack.version
    })
})

module.exports = app