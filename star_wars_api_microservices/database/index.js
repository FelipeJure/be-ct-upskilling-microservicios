const app = require('./src/server');
const { PORT } = require('./src/configs/envs')
const { Character } = require('./src/database')

Character.list().then(res => console.log(res))

const main = async () => {
    await app.listen(PORT)
    console.log(`Database listening on port ${PORT}`)
}
main()