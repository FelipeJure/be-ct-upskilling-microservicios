const server = require("./src/server");
require('dotenv').config()

const { PORT } = process.env

const main = async () => {
  await server.listen(PORT)
  console.log(`Films server listening on port ${PORT}`);
}

main()