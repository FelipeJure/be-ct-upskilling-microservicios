const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    const { id } = req.params
    const DBcharacter = await axios.get(`http://database:8004/Character/${id}`)
    const { data } = DBcharacter
    response(res, 200, data)
}