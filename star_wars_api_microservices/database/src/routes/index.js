const { Router } = require('express');
const store = require('../database');
const { validateModel, validateBody } = require('../middlewares')

const router = Router()

router.get('/:model', validateModel, async (req, res) => {
    const { model } = req.params
    const response = await store[model].list()
    res.status(200).send(response)
})

router.get('/:model/:id', validateModel, async (req, res) => {
    const { model, id } = req.params
    const response = await store[model].get(id)
    res.status(200).send(response)
})

router.post('/:model', validateModel, validateBody, async (req, res) => {
    const { model } = req.params
    const newElement = req.body
    const response = await store[model].create(newElement)
    res.status(200).send(response)
})

module.exports = router