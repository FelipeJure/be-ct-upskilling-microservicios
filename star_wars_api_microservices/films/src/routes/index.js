const { Router } = require("express");
const { getFilms, getOneFilm } = require('../controllers')

const router = Router();

router.get("/films", getFilms);

router.get('/films/:id', getOneFilm)

module.exports = router;
