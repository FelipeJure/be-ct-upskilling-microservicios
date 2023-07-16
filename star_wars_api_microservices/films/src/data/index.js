const films = require('./films.json');

module.exports = {
    list: async () => await films
}