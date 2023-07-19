const app = require('./src/server');



const main = async () => {
    await app.listen(PORT)
    console.log(`Database listening on port ${PORT}`)
}
main()