const { Router } = require("express");
const { getPlanets } = require('../controllers')

const router = Router();

router.get("/", getPlanets);

module.exports = router;
