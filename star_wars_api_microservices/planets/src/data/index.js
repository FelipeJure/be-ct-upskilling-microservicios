const planets = require('./planets.json');

module.exports = {
    list: async () => await planets
}