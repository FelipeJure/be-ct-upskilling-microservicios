const { Router } = require("express");
const { getCharacters, getOneCharacter } = require('../controllers')

const router = Router();

router.get("/characters", getCharacters);

router.get("/characters/:id", getOneCharacter);

module.exports = router;
