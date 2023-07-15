const server = require("./src/server");

const PORT = 8001

const main = async () => {
  await server.listen(PORT)
  console.log(`Characters server listening on port ${PORT}`);
}

main()