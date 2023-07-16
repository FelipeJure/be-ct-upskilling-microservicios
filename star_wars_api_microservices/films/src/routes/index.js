const { Router } = require("express");
const { getFilms } = require('../controllers')

const router = Router();

router.get("/films", getFilms);

module.exports = router;
