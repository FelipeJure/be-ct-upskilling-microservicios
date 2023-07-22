const { response } = require('../utils');
const store = require('../database');

module.exports = async (req, res, next) => {
    const { model } = req.params
    const newElement = req.body
    try{
        const data = await store[model].create(newElement)
        response(res, 200, data)
    } catch (error) {
        next(`Ya existe un ${model} con ese ID`)
    }
}