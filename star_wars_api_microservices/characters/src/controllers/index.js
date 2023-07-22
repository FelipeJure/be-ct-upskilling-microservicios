const { catchedAsync } = require('../utils')
module.exports = {
    getCharacters: catchedAsync(require('./getCharacters')),
    getOneCharacter: catchedAsync(require('./getOneCharacter'))
}