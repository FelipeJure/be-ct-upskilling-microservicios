const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    const DBfilms = await axios.get(`http://database:8004/Film`)
    const { data } = DBfilms
    response(res, 200, data)
}