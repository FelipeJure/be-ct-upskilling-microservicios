const { response } = require('../utils');
const store = require('../database');

module.exports = async (req, res, next) => {
    const { model, id } = req.params
    const data = await store[model].get(id)
    if(!data) return next(`${model} not found`)
    response(res, 200, data)
}