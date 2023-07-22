const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    const DBplanets = await axios.get("http://database:8004/Planet")
    const { data } = DBplanets
    response(res, 200, data)
}