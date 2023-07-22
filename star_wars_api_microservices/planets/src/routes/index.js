const { Router } = require("express");
const { getPlanets, getOnePlanet } = require('../controllers')

const router = Router();

router.get("/planets", getPlanets);

router.get('/planets/:id', getOnePlanet)

module.exports = router;
