const express = require('express');
const morgan = require('morgan');

const app = express()

app.use(morgan('dev'))

app.use(express.json())

app.use(require('./routes'))

app.use('*', (req, res) => {
    return res.status(404).send('Not found')
})

app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).send({
        error: true,
        message: error.message || error
    })
})

module.exports = app