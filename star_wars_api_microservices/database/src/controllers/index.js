const catchedAsync = require('../utils/catchedAsync')

module.exports = {
    getUnique: catchedAsync(require('./getUnique')),
    getModel: catchedAsync(require('./getModel')),
    createOne: catchedAsync(require('./createOne'))
}