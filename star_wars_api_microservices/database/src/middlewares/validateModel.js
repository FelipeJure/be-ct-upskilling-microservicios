module.exports = (req, res, next) => {
    if(['Character', 'Film', 'Planet'].includes(req.params.model)){
        return next()
    } else {
        next('Debe colocar un modelo valido')
    }
}