const { Router } = require('express');
const { validateModel, validateBody } = require('../middlewares');
const { getModel, getUnique, createOne } = require('../controllers')

const router = Router()

router.get('/:model', validateModel, getModel)

router.get('/:model/:id', validateModel, getUnique)

router.post('/:model', validateModel, validateBody, createOne)

module.exports = router