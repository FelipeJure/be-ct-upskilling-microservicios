const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    const { id } = req.params
    const DBplanet = await axios.get(`http://database:8004/Planet/${id}`)
    const { data } = DBplanet
    response(res, 200, data)
}