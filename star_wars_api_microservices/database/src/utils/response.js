module.exports = (res, statusCode, data) => {
    return res.status(statusCode).send({
        error: false,
        data
    })
}