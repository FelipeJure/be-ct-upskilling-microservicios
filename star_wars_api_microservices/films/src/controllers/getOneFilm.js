const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    const { id } = req.params
    const DBfilm = await axios.get(`http://database:8004/Film/${id}`)
    const { data } = DBfilm
    response(res, 200, data)
}