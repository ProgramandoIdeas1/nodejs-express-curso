const express = require('express')
const morgan = require('morgan')

const app = express()

// settings
app.set('appName', 'Programando ideas course express')
app.set('port', 4000)
app.set('view engine', 'ejs')

// middlewares
app.use(express.json())
app.use(morgan('dev'))

app.listen(app.get('port'), (req, res) => {
    console.log(app.get('appName'))
    console.log(`Server on port ${app.get('port')}`)
})

// routes
/*
app.all('/user', (req, res, next) => {
    console.log('here router user all')
    next()
})
*/
app.get('/', (req, res) => {
    const data = [
        {name:'java'},
        {name:'python'},
        {name:'javascript'},
        {name:'php'},
        {name:'c share'},
        {name:'c ++'}
    ]
    res.render('index.ejs', {lengs:data})
})

app.get('/user', (req, res) => {
    res.json({
        username : 'Steve',
        lastname : 'Woniak'
    })
})

app.post('/user/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.send('PETICION POST RECIBIDA')
})

app.put('/user/:userId', (req, res) => {
    console.log(req.body)
    res.send(`User ${req.params.userId} updated`)
})

app.delete('/user/:userId', (req, res) => {
    res.send(`User ${req.params.userId} deleted`)
})

app.use(express.static('public'))