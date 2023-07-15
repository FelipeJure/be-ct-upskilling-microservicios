const Characters = require('../data')

module.exports = async (req, res) => {
    const characters = await Characters.list()
    res.status(200).send({
        error: false,
        message: characters
    })
}