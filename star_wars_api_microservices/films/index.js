const server = require("./src/server");

const PORT = 8002

const main = async () => {
  await server.listen(PORT)
  console.log(`Films server listening on port ${PORT}`);
}

main()