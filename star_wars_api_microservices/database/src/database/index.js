const mongoose = require('mongoose');
const { MONGO_URL } = require('../configs/envs');
const { characterSchema, filmSchema, planetSchema } = require('./schemas')

const conn = mongoose.createConnection(MONGO_URL)

module.exports = {
    Character: conn.model('Character', characterSchema),
    Film: conn.model('Film', filmSchema),
    Planet: conn.model('Planet', planetSchema)
}

