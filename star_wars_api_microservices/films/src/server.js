const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use('*', (req, res) => {
    return res.status(404).send('Not Found')
})

server.use((error, req, res, next) => {
    res.status(error.statusCode || 500).send({
        error: true,
        message: error.message
    })
})

module.exports = server;
