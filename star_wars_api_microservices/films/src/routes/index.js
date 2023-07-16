const { Router } = require("express");
const { getFilms } = require('../controllers')

const router = Router();

router.get("/", getFilms);

module.exports = router;
