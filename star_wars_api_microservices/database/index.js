const app = require('./src/server');

const PORT = 8004

const main = async () => {
    await app.listen(PORT)
    console.log(`Database listening on port ${PORT}`)
}
main()