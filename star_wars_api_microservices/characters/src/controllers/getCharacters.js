const Characters = require('../data');
const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    axios.get("http://database:8004/Character")
    const characters = await Characters.list()
    response(res, 200, characters)
}