const store = require('../database');

module.exports = async (req, res, next) => {
    const { model } = req.params
    const newElement = req.body
    try{
        const data = await store[model].create(newElement)
        res.status(200).send(data)
    } catch (error) {
        next(`Ya existe un ${model} con ese ID`)
    }
}