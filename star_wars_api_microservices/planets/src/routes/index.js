const { Router } = require("express");
const { getPlanets } = require('../controllers')

const router = Router();

router.get("/planets", getPlanets);

module.exports = router;
