const app = require('./src/server');
const { PORT } = require('./src/configs/envs')


const main = async () => {
    await app.listen(PORT)
    console.log(`Database listening on port ${PORT}`)
}
main()