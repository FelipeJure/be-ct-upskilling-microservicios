const store = require('../database');

module.exports = async (req, res, next) => {
    const { model, id } = req.params
    const data = await store[model].get(id)
    if(!data) return next(`${model} not found`)
    res.status(200).send(data)
}