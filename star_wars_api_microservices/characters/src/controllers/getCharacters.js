const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
    const DBcharacters = await axios.get("http://database:8004/Character")
    const { data } = DBcharacters
    response(res, 200, data)
}