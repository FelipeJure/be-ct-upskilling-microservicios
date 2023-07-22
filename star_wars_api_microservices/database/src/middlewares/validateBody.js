module.exports = (req, res, next) => {
    const id = req.body._id
    if(!id || typeof(id) === 'object') next('Debe pasar con un ID')
    else next()
}